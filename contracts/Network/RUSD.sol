// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "./CIP36.sol";
import "./interface/INetworkRoles.sol";
import "../Credit/interface/ICreditFeeManager.sol";
import "../iKeyWallet/IiKeyWalletDeployer.sol";
import "../Credit/interface/ICreditRoles.sol";
import "hardhat/console.sol";

contract RUSD is CIP36, PausableUpgradeable {
    /*
     *  Storage
     */
    INetworkRoles public networkRoles;
    ICreditRoles public creditRoles;
    ICreditFeeManager public feeManager;

    modifier onlyAuthorized() override {
        require(
            networkRoles.isNetworkOperator(msg.sender) ||
                creditRoles.isCreditOperator(msg.sender) ||
                msg.sender == owner(),
            "Unauthorized caller"
        );
        _;
    }

    modifier onlyRegistered(address _from, address _to) {
        require(networkRoles.isMember(_from), "Sender is not network member");
        require(networkRoles.isMember(_to), "Recipient is not network member");
        _;
    }

    modifier onlyNetworkOperator() {
        require(networkRoles.isNetworkOperator(msg.sender), "Caller is not network operator");
        _;
    }

    function initializeRUSD(
        address _creditRoles,
        address _feeManager,
        address _networkRoles
    ) external virtual initializer {
        creditRoles = ICreditRoles(_creditRoles);
        feeManager = ICreditFeeManager(_feeManager);
        networkRoles = INetworkRoles(_networkRoles);
        CIP36.initialize("rUSD", "rUSD");
        __Pausable_init();
        _pause();
    }

    /*
     *  Overrides
     */
    function _transfer(
        address _from,
        address _to,
        uint256 _amount
    ) internal override onlyRegistered(_from, _to) {
        if (!paused()) {
            feeManager.collectFees(address(this), _from, _amount);
        }
        super._transfer(_from, _to, _amount);
    }

    function bulkTransfer(address[] memory _to, uint256[] memory _values) external {
        require(_to.length == _values.length, "RUSD: invalid input");
        for (uint256 i = 0; i < _to.length; i++) {
            _transfer(msg.sender, _to[i], _values[i]);
        }
    }

    function canRequestCredit(address _requester, address _member)
        public
        view
        override
        returns (bool)
    {
        return _requester == _member || networkRoles.isNetworkOperator(_requester);
    }

    function pause() public onlyAuthorized {
        _pause();
    }

    function unpause() public onlyAuthorized {
        _unpause();
    }
}
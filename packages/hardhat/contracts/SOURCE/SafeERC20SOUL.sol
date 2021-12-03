// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./IERC20SOUL.sol";
import "@openzeppelin/contracts/utils/Address.sol";


/**
 * @title SafeERC20SOUL
 * @dev Wrappers around ERC20SOUL operations that throw on failure (when the token
 * contract returns false). Tokens that return no value (and instead revert or
 * throw on failure) are also supported, non-reverting calls are assumed to be
 * successful.
 * To use this library you can add a `using SafeERC20SOUL for IERC20SOUL;` statement to your contract,
 * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.
 */
library SafeERC20SOUL {
    using Address for address;

    // function safeTransfer(
    //     IERC20SOUL token,
    //     address to,
    //     uint256 value
    // ) internal {
    //     _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    // }

    // function safeTransferWithLock(
    //     IERC20SOUL token,
    //     address _to,
    //     IERC20SOUL.Lock calldata _lock
    // ) internal {
    //     _callOptionalReturn(token, abi.encodeWithSelector(token.transferWithLock.selector, _to, _lock));
    // }

    // function safeTransferFrom(
    //     IERC20SOUL token,
    //     address from,
    //     address to,
    //     uint256 value
    // ) internal {
    //     _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    // }

    // /**
    //  * @dev Deprecated. This function has issues similar to the ones found in
    //  * {IERC20SOUL-approve}, and its usage is discouraged.
    //  *
    //  * Whenever possible, use {safeIncreaseAllowance} and
    //  * {safeDecreaseAllowance} instead.
    //  */
    // function safeApprove(
    //     IERC20SOUL token,
    //     address spender,
    //     uint256 value
    // ) internal {
    //     // safeApprove should only be called when setting an initial allowance,
    //     // or when resetting it to zero. To increase and decrease it, use
    //     // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
    //     require(
    //         (value == 0) || (token.allowance(address(this), spender) == 0),
    //         "SafeERC20: approve from non-zero to non-zero allowance"
    //     );
    //     _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    // }

    // function safeIncreaseAllowance(
    //     IERC20SOUL token,
    //     address spender,
    //     uint256 value
    // ) internal {
    //     uint256 newAllowance = token.allowance(address(this), spender) + value;
    //     _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    // }

    // function safeDecreaseAllowance(
    //     IERC20SOUL token,
    //     address spender,
    //     uint256 value
    // ) internal {
    //     unchecked {
    //         uint256 oldAllowance = token.allowance(address(this), spender);
    //         require(oldAllowance >= value, "SafeERC20SOUL: decreased allowance below zero");
    //         uint256 newAllowance = oldAllowance - value;
    //         _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    //     }
    // }

    // /**
    //  * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
    //  * on the return value: the return value is optional (but if data is returned, it must not be false).
    //  * @param token The token targeted by the call.
    //  * @param data The call data (encoded using abi.encode or one of its variants).
    //  */
    // function _callOptionalReturn(IERC20SOUL token, bytes memory data) private {
    //     // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
    //     // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
    //     // the target address contains contract code and also asserts for success in the low-level call.

    //     bytes memory returndata = address(token).functionCall(data, "SafeERC20SOUL: low-level call failed");
    //     if (returndata.length > 0) {
    //         // Return data is optional
    //         require(abi.decode(returndata, (bool)), "SafeERC20SOUL: ERC20 operation did not succeed");
    //     }
    // }
}

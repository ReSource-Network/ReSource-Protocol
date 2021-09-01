import { BoxProps, StackProps, Text } from "@chakra-ui/layout"
import { Box, HStack, VStack } from "@chakra-ui/react"
import React from "react"
import { Business } from "../../../generated/graphql"
import colors from "../../../theme/foundations/colors"
import { localizedDayJs } from "../../../utils/dayjs"
import { NoSearchResults } from "../components/NoSearchResults"
import { useQueryBusinessViaHandleInUrl } from "../utils/hooks"

interface Props extends BoxProps {
  key: string
}

const BusinessSummaryPage = ({ ...rest }: Props) => {
  const { data, called, loading } = useQueryBusinessViaHandleInUrl()
  const business = data?.findOneBusinessByHandle as Business
  console.log("BusinessSummaryPage.tsx --  business.wallet", business?.wallet)

  if (loading) return null
  if (called && !loading && !business?.id) return <NoSearchResults />

  return (
    <Box p={6} pt="150px">
      <HStack align="flex-start" spacing="32px">
        <VStack {...columnProps}>
          <Text px={3}>Contacts</Text>
          <SolidCard label="email" value={business.email} />
          <SolidCard label="phone" value={business.phoneNumber} />
          <SolidCard label="date joined" value={localizedDayJs(business.createdAt).format("LL")} />
          <SolidCard label="ambassador" value={business.ambassador?.handle} />
        </VStack>
        <VStack {...columnProps}>
          <Text px={3}>Market</Text>
          {/* <OutlineCard label="sector" value={business.email} /> */}
          <OutlineCard label="region" value={business.address} />
        </VStack>
        <VStack {...columnProps}>
          <Text px={3}>Activity</Text>
          <OutlineCard label="transaction volume" value={null} />
          <OutlineCard label="transations" value={null} />
          <OutlineCard label="listings" value={null} />
        </VStack>
        <VStack {...columnProps}>
          <Text px={3}>Wallet</Text>
          <OutlineCard label="balance" value={null} />
          <OutlineCard label="credit line" value={null} />
        </VStack>
      </HStack>
    </Box>
  )
}

interface CardProps extends BoxProps {
  label?: string | null
  value?: string | null
}

const columnProps: StackProps = {
  spacing: "16px",
  align: "stretch",
  minW: "150px",
}

const SolidCard = ({ label, value, ...rest }: CardProps) => {
  return (
    <Box p={4} borderRadius="2xl" bgColor="gray.100">
      <Text color="gray.700">{label}</Text>
      <Text mt={1}>{value ?? "n/a"}</Text>
    </Box>
  )
}

const OutlineCard = ({ label, value, ...rest }: CardProps) => {
  return (
    <Box p={4} borderRadius="2xl" border={`1px solid ${colors.gray[100]}`}>
      <Text color="gray.700">{label}</Text>
      <Text mt={1}>{value ?? "n/a"}</Text>
    </Box>
  )
}

export default BusinessSummaryPage
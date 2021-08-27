import React from "react"
import { Box, BoxProps } from "@chakra-ui/layout"

interface Props extends BoxProps {
  key: string
}

const SearchBusinessesPage = ({ ...rest }: Props) => {
  return (
    <Box {...rest}>
      <p>SearchBusinessesPage works!</p>
    </Box>
  )
}

export default SearchBusinessesPage

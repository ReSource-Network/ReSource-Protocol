import { Box, BoxProps, Text, TextProps } from "@chakra-ui/react"
import React from "react"
import { gradients } from "../../theme/foundations/colors"
import Glyph, { GlyphColor } from "./RusdGlyph"

const formatOptions = { minimumFractionDigits: 2, maximumFractionDigits: 2 }

type GlyphLabelVariant = "credit" | "balance" | "price" | "gradient"

export interface GlyphLabelProps extends TextProps {
  size?: "sm" | "md" | "lg"
  value?: number | null | string
  loading?: boolean
  color?: GlyphColor
  badStanding?: boolean
  variant?: GlyphLabelVariant
  iconPosition?: "left" | "right" | "none"
}

const GlyphLabel = (props: GlyphLabelProps) => {
  const {
    value,
    badStanding,
    variant,
    loading,
    color: propColor,
    size = "md",
    iconPosition = "right",
    lineHeight,
    ...textProps
  } = props

  const numberValue = typeof value === "string" ? parseFloat(value) : value ?? 0
  if (isNaN(numberValue)) throw new Error("could not parse Glyph value")

  const glyphColor = propColor || getColor({ value: numberValue, badStanding, variant })
  const textColor = glyphColor === "gray" ? "black.main" : `${glyphColor}.main`
  const formattedValue = loading ? "----" : walletValueToString(numberValue)

  return (
    <Box h="full" whiteSpace="nowrap" {...textProps}>
      {iconPosition === "left" && <Glyph size={size} bgColor={glyphColor} />}
      <Text
        as="span"
        variant="number"
        data-testid="glyph-label"
        color={props.textColor || textColor}
        {...(variant === "gradient" ? gradientStyles : {})}
        lineHeight={lineHeight || "inherit"}
      >
        {formattedValue}
      </Text>
      {iconPosition === "right" && (
        <>
          {variant === "gradient" ? (
            <Glyph size={size} bgColor="purple" />
          ) : (
            <Glyph size={size} bgColor={glyphColor} />
          )}
        </>
      )}
    </Box>
  )
}

const gradientStyles: BoxProps = {
  bg: gradients.primary,
  bgClip: "text",
  color: "inherit",
}

const getColor = (props: { value: number; badStanding?: boolean; variant?: GlyphLabelVariant }) => {
  const { value, badStanding = false, variant = "price" } = props
  if (variant === "credit") return "purple"
  if (variant === "price") return "gray"
  if (badStanding) return "red"
  if (value <= 0) return "black"
  if (value > 0) return "green"
  return "black"
}

type OptionsType = { decimals: number }
export const walletValueToString = (val: number, options?: OptionsType) => {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: options?.decimals ?? 2,
    maximumFractionDigits: options?.decimals ?? 2,
  })
}

export default GlyphLabel
import React from "react"
import PropTypes from "prop-types"

// Components
import {
  useMultiStyleConfig,
  Text,
  Flex,
  Stack,
  HStack,
  Link,
  Button,
} from "@chakra-ui/react"
import Menu from "../menu/menu"

const Header = (props) => {
  const style = useMultiStyleConfig("Header")

  let menuItems = [
    { label: "La nostra storia", href: "#storia" },
    { label: "Partecipa", href: "#partecipa" },
    { label: "Regali", href: "#regali" },
  ]

  return (
    <HStack as='header' {...style.headerWrapper}>
      <Text {...style.logo}>MD</Text>
      <Menu />
    </HStack>
  )
}

Header.propTypes = {
  description: PropTypes.string,
}

export default Header

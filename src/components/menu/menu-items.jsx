import React, { useState } from "react"
import PropTypes from "prop-types"
import { useMultiStyleConfig, Flex, Box, Link, Button } from "@chakra-ui/react"

const MenuItems = ({ handleOnClick }) => {
  const style = useMultiStyleConfig("Header")

  const menuItems = [
    { label: "La nostra storia", href: "#storia" },
    { label: "Partecipa", href: "#partecipa" },
    { label: "Regali", href: "#regali" },
  ]

  return (
    <>
      <Flex {...style.itemsWrapper}>
        {menuItems.map((item, index) => (
          <Button
            key={index}
            as={Link}
            href={item.href}
            {...style.menuItem}
            onClick={() => handleOnClick()}
          >
            {item.label}
          </Button>
        ))}
      </Flex>
      <Button
        as={Link}
        href='#map'
        {...style.menuItem}
        onClick={() => handleOnClick()}
      >
        Mappa
      </Button>
    </>
  )
}

MenuItems.propTypes = {
  description: PropTypes.string,
}

export default MenuItems

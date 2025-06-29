import React from "react"
import PropTypes from "prop-types"
import {
  useMultiStyleConfig,
  HStack,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"

import MenuItems from "./menu-items"

const Menu = () => {
  const style = useMultiStyleConfig("Header")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <>
      {isMobile ? (
        <>
          <Button
            onClick={onOpen}
            aria-label='Open menu'
            {...style.burgerMenu}
          />
          <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody {...style.drawer}>
                <MenuItems handleOnClick={onClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <HStack {...style.linkContainer}>
          <MenuItems />
        </HStack>
      )}
    </>
  )
}

Menu.propTypes = {
  description: PropTypes.string,
}

export default Menu

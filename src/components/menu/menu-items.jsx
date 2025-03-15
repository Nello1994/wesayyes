import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { 
  useMultiStyleConfig, 
  Flex, 
  Box, 
  Link, 
  Button, 
} from '@chakra-ui/react'

const MenuItems = () => {
  const style = useMultiStyleConfig('Header')

  const menuItems = [
    { label: 'La nostra storia', href: '#storia' },
    { label: 'Cerimonia', href: '#cerimonia' },
    { label: 'Il nostro viaggio', href: '#viaggio' },
    { label: 'Partecipa', href: '#partecipa' }
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
                >
                {item.label}
                </Button>
            ))}
        </Flex>
        <Button
        as={Link} 
        href='#map' 
        {...style.menuItem}
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

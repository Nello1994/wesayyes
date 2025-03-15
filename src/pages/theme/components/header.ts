import { position, textDecoration } from '@chakra-ui/react'
import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    headerWrapper: {
        w: '100%',
        padding: {base: '16px 32px', lg: '24px 80px'},
        justifyContent: {base:'space-between', lg: 'unset'},
        position: 'fixed',
        top: '0',
        zIndex: '1',
        bg: Colors.white,
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)'
    },

    linkContainer: {
        justifyContent: 'space-between',
        w: '100%',
    },
    logo: {
      ...Typ.custom_medium
    },

    itemsWrapper: {
        flexDirection: {base: 'column', lg: 'row'}
    },

    drawer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: {base: 'column'},
        padding: '40px',
    },

    menuItem: {
        bg: 'unset',
        color: Colors.black,
        ...Typ.body_light,
        _hover: {
            textDecoration: 'unset',
            color: Colors.black,
            opacity: '0.6',
        },
    },

    burgerMenu: {
        padding: '0',
        _after: {
            content: '"|||"',
            transform: 'rotate(90deg)',
            ...Typ.body_light,
        }
    },
  },
  variants: {},
}

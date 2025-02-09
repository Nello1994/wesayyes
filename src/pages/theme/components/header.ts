import { textDecoration } from '@chakra-ui/react'
import { Typ, Colors } from '../utils'
import { color, transform } from 'framer-motion'

export default {
  baseStyle: {
    headerWrapper: {
        w: '100%',
        padding: {base: '32px', lg: '40px 80px'},
        justifyContent: {base:'space-between', lg: 'unset'},
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

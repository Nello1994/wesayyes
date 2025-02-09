import { position } from '@chakra-ui/react'
import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    stack: {
      w: '100%',
      padding: {base: '0', lg: '72px 80px'},
      gap: {base: '60px', lg: '120px'},
      flexDirection: {base: 'column', lg: 'row'},
    },
    title: {
      ...Typ.custom_large,
    },
    mediaWrp: {
      width: {base: '100%', lg: '50%'},
      flex: {base: 'unset', lg: '1 1 0'},
      gap: {base: '16px', lg: '32px'},
      overflow: {base: 'auto', lg: 'unset'},
      padding: {base: '0 32px', lg: '0'},
    },
    textWrp: {
      flex: '0 0 auto',
      order: {base: '2', lg: 'unset'},
    },
    mediaBox: {
      aspectRatio: '1/2',
      flex: {base: 'none', lg: '1 1 0'},
      borderRadius: '160px',
      //bg: Colors.primary100,
      position: 'relative',
      h: {base: '65vh', lg: 'unset'},

      _after: {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        bg: Colors.primary100,
        zIndex: '1',
        top: '0',
        borderRadius: '160px',
        opacity: '0.2',
      }
    },

    image: {
      filter: 'grayscale(100%)',
      h: '100%',
      objectFit: 'cover',
      borderRadius: '160px',
    },
  },
  variants: {},
}

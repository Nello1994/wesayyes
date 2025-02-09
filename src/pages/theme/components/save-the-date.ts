import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    stack: {
      w: '100%',
      padding: { base: '32px 0', lg: '72px 0' },
      gap: { lg: '120px' },
    },
    title: {
      ...Typ.custom_xlarge,
    },
    mediaWrp: {
      width: '50%',
      flex: '1 1 0',
      gap: '32px',
    },
    textWrp: {
      flex: '0 0 auto',
    },
    mediaBox: {
      aspectRatio: '1/2',
      flex: '1 1 0',
      borderRadius: '160px',
      bg: Colors.primary100,
      position: 'relative',
    },
  },
  variants: {},
}

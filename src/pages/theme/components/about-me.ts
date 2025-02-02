import { Typ, Colors } from '../utils'

export default {
  baseStyle: {
    title: {
      textAlign: 'center',
      ...Typ.h1_ext_reg,
    },
    description: {
      ...Typ.body_light,
    },
    stack: {
      w: '35vw',
      maxW: '510px',
      gap: '140px',
    },
  },
  variants: {},
}

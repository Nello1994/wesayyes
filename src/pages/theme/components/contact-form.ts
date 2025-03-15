import {Typ} from '../utils'

export default {
    baseStyle: {
        formWrp: {
            maxW: {base:'unset', lg: '500px'},
            padding: {base: '80px 32px 40px', lg: '80px 0'},
            m: {base: '0 auto'},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
        },

        inputWrp: {
            alignItems: 'left',
            gap: '16px',
            w: '100%',
            mb: '32px',
        },

        formText: {
            ...Typ.custom_large,
            mb: '32px',
        },

        formButton: {
            width: '100%',
            mt: '32px',
            p: '50px',
            ...Typ.custom_large,
        }
    },
    variants: {},
  }
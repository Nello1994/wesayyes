import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

import Header from './components/header'
import SaveTheDate from './components/save-the-date'
import Global from './global'

const theme = extendTheme({
  fonts,

  components: {
    Global,
    Header,
    SaveTheDate,
  },
})

export default extendTheme(theme)

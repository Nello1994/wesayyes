import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

import AboutMe from './components/about-me'

const theme = extendTheme({
  fonts,

  components: {
    AboutMe,
  },
})

export default extendTheme(theme)

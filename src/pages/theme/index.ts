import { extendTheme } from '@chakra-ui/react'
import fonts from './foundations/fonts'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

import Header from './components/header'
import SaveTheDate from './components/save-the-date'
import Divider from './components/divider'
import OurStory from './components/our-story'
import ContactForm from './components/contact-form'
import ScrollingText from './components/scrolling-text'
import Global from './global'

const theme = extendTheme({
  fonts,

  components: {
    Global,
    Header,
    SaveTheDate,
    OurStory,
    Divider,
    ContactForm,
    ScrollingText
  },
})

export default extendTheme(theme)

import PropTypes from 'prop-types'
import SaveTheDate from '../components/save-the-date/index'
import Divider from '../components/divider'
import ContactForm from '../components/contact-form/ContactForm'
import MapComponent from '../components/map-component/MapComponent'
import OurStory from '../components/our-story/OurStory'
import ScrollingText from '../components/scrolling-text/scrollingText'

import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Home = (props) => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    const headerElement = document.querySelector('header')
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight)
    }

    const handleResize = () => {
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box position="relative" w="100%" top={`${headerHeight}px`}>
      <SaveTheDate />
      <ScrollingText></ScrollingText>
      <OurStory></OurStory>
      <Divider />
      <ContactForm />
      <MapComponent />
    </Box>
  )
}

Home.propTypes = {}

export default Home

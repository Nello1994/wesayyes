import PropTypes from "prop-types"
import SaveTheDate from "../components/save-the-date/index"
import ContactForm from "../components/contact-form/ContactForm"
import MapComponent from "../components/map-component/MapComponent"
import OurStory from "../components/our-story/OurStory"

import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const Home = (props) => {
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    const headerElement = document.querySelector("header")
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight)
    }

    const handleResize = () => {
      if (headerElement) {
        setHeaderHeight(headerElement.offsetHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <Box position='relative' w='100%' top={`calc(${headerHeight}px)`}>
      <SaveTheDate />
      <OurStory></OurStory>
      <ContactForm />
      <MapComponent />
    </Box>
  )
}

Home.PropTypes = {}

export default Home

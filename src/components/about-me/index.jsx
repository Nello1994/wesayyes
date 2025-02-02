import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Stack } from '@chakra-ui/react'

const AboutMe = (props) => {
  const style = useMultiStyleConfig('AboutMe')

  return (
    <Stack {...style.stack}>
      <Text {...style.description}>TODO: add whatever you want</Text>
    </Stack>
  )
}

AboutMe.propTypes = {
  description: PropTypes.string,
}

export default AboutMe

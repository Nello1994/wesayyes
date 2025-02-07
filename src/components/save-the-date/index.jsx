import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Box, Flex, HStack } from '@chakra-ui/react'

const SaveTheDate = (props) => {
  const style = useMultiStyleConfig('SaveTheDate')
  const mediaBoxes = [1, 2, 3]

  const [stackHeight, setStackHeight] = useState('100%')

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector('header')
      if (header) {
        const headerHeight = header.offsetHeight
        setStackHeight(`${window.innerHeight - headerHeight}px`)
      }
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <HStack {...style.stack} height={stackHeight}>
      <Box {...style.textWrp}>
        <Text {...style.title}>Save the date</Text>
      </Box>
      <Flex {...style.mediaWrp}>
      {mediaBoxes.map((item) => (
        <Box key={item} {...style.mediaBox}>
        </Box>
      ))}
      </Flex>
    </HStack>
  )
}

SaveTheDate.propTypes = {
  description: PropTypes.string,
}

export default SaveTheDate

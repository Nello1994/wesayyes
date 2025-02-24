import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Text, Box, Flex, HStack, Image } from '@chakra-ui/react'

const SaveTheDate = (props) => {
  const style = useMultiStyleConfig('SaveTheDate')
  const mediaBoxes = [1, 2, 3]

  const imageUrls = {
    1: "src/assets/img/Save_the_Date_1.jpeg",
    2: "src/assets/img/Save_the_Date_2.jpeg",
    3: "src/assets/img/Save_the_Date_1.jpeg",
  }

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
        <Text {...style.subtitle}>12 Settembre 2025</Text>
      </Box>
      <Flex className='hideScrollBar' {...style.mediaWrp}  css={{'&::-webkit-scrollbar': { display: 'none' },}}>
      {mediaBoxes.map((item) => (
        <Box key={item} {...style.mediaBox}>
          <Image src={imageUrls[item]} alt={`image-${item}`} {...style.image} />
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

import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Flex, Text } from '@chakra-ui/react'
import { Colors } from '../../../pages/theme/utils'

function ColorPage({ pageStyle }) {
  const borderStyle = {
    border: '1px',
    borderColor: Colors.disabled,
  }

  function colorComponent(Colors, key) {
    const params = Colors[key]

    return (
      <Flex key={key} flexDir={'column'} alignItems={'center'}>
        <Box
          bg={params}
          w={'50%'}
          aspectRatio={'1'}
          borderRadius={'100%'}
          mb={'20px'}
          {...((params === 'transparent' || params === '#FFFFFF') && {
            ...borderStyle,
          })}
        />
        <Text fontWeight={'600'}>{key}</Text>
        <Text fontSize={'12px'}>{params}</Text>
      </Flex>
    )
  }
  return (
    <Grid
      {...pageStyle}
      templateColumns={{
        lg: 'repeat(5, 1fr)',
        md: 'repeat(3, 1fr)',
        base: 'repeat(1, 1fr)',
      }}
      gridRowGap={'40px'}
      padding={{ lg: '60px', base: '24px' }}
    >
      {Object.keys(Colors).map(function (key) {
        return colorComponent(Colors, key)
      })}
    </Grid>
  )
}

ColorPage.propTypes = {
  pageStyle: PropTypes.any,
}

export default ColorPage

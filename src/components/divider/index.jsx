import React from 'react'
import PropTypes from 'prop-types'

// Components
import { useMultiStyleConfig, Box, Image } from '@chakra-ui/react'

const Divider = () => {
  const style = useMultiStyleConfig('Divider')

  return (
    <Box {...style.divider}>
      <Image {...style.img} src={'src/assets/img/flowers.jpg'} />
    </Box>
  )
}

Divider.propTypes = {
  description: PropTypes.string,
}

export default Divider

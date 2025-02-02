import React from 'react'
import { Flex, Text, Grid, GridItem } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Colors, Typ } from '../../../pages/theme/utils'

const TypographyPage = ({ pageStyle }) => {
  const specifTypArray = [
    {
      name: 'Family',
      prop: 'fontFamily',
    },
    {
      name: 'Style',
      prop: 'fontWeight',
    },
    {
      name: 'Size',
      prop: 'fontSize',
    },
    {
      name: 'Line Height',
      prop: 'lineHeight',
    },
    {
      name: 'Character spacing',
      prop: 'letterSpacing',
    },
  ]

  function specificTyp(spec, params) {
    let content = ''

    switch (spec.prop) {
      case 'fontWeight':
        content = params[spec.prop] === 600 ? 'Semibold' : 'Regular'
        break

      case 'fontSize':
        content = params[spec.prop]?.base || 0
        break

      case 'lineHeight':
        content = params[spec.prop]?.base || 0
        break

      case 'letterSpacing':
        content = params[spec.prop]?.base || 0
        break

      default:
        content = params[spec.prop]
        break
    }

    return (
      <GridItem flexDir={'column'}>
        <Text>{spec.name}</Text>
        <Text fontWeight={600}>{content}</Text>
      </GridItem>
    )
  }

  const flexStyle = {
    width: '100%',
    flexDir: { md: 'row', base: 'column' },
    gap: '40px',
    borderTop: '1px',
    borderColor: Colors.disabled,
    paddingTop: '80px',
  }

  function typoComponent(Typ, key) {
    const params = Typ[key]
    return (
      <Flex {...flexStyle}>
        <Flex flexDir={'column'} w={{ md: '30%', base: '100%' }}>
          <Text>Name reference</Text>
          <Text fontSize={'32px'} fontWeight={600}>
            {key}
          </Text>
        </Flex>
        <Flex flexDir={'column'} gap={'40px'} w={{ md: 'auto', base: '100%' }}>
          <Grid
            templateColumns={{ md: 'repeat(5, 1fr)', base: 'repeat(1, 1fr)' }}
            gap={{ md: '30px', base: '10px' }}
          >
            {specifTypArray.map((spec) => specificTyp(spec, params))}
          </Grid>
          <Flex {...params}>Dui viverra cum quis sed in placerat in amet.</Flex>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex {...pageStyle} gap={'60px'}>
      {Object.keys(Typ).map(function (key) {
        return typoComponent(Typ, key)
      })}
    </Flex>
  )
}

TypographyPage.displayName = 'TypographyPage'
TypographyPage.propTypes = {
  pageStyle: PropTypes.any,
}
export default TypographyPage

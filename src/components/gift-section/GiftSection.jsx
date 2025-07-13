import React from "react"
import PropTypes from "prop-types"

// Components
import { useMultiStyleConfig, Box, VStack, Text, Image } from "@chakra-ui/react"
import flower from "../../assets/img/fiore-png.png"

const GiftSection = () => {
  const style = useMultiStyleConfig("GiftSection")

  return (
    <Box id='regali' {...style.giftWrp}>
      <VStack {...style.textWrp}>
        <Text {...style.title}>
          Il regalo più bello sarà avervi con noi in questo giorno così
          importante
        </Text>

        <Text {...style.paragraph} textAlign='center'>
          Per chi lo desiderasse, sarà possibile accompagnare il nostro nuovo
          inizio con un piccolo pensiero:
        </Text>

        <Text {...style.iban} textAlign='center'>
          <b>IBAN:</b> IT62H0200809500000430487508
        </Text>
        <Text {...style.iban} textAlign='center'>
          <b>Intestato a</b>: MARIA BORRELLI
        </Text>
        <Text {...style.paragraph} textAlign='center'>
          Grazie di cuore
        </Text>
        <Image src={flower} {...style.flowers1} alt='our story image' />
        <Image src={flower} {...style.flowers2} alt='our story image' />
      </VStack>
    </Box>
  )
}

GiftSection.propTypes = {}

export default GiftSection

import React, { useEffect, useRef } from 'react'
import {useMultiStyleConfig, Box, VStack, Flex, Text, Highlight} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import videoSrc from '../../static/our_story.mp4'

const OurStory = () => {
     const style = useMultiStyleConfig('OurStory')

     const videoRef = useRef(null);

     useEffect(() => {
       if (videoRef.current) {
         videoRef.current.play()
       }
     }, [])

  return (
    <Flex id='storia' {...style.mainContainer}>
        <Box {...style.videoWrp}>
            {/* <Image src="src/assets/img/our_story.jpg" alt='our story image' /> */}
            <video style={{width: '100%', height: '100%', borderRadius: '50px', objectFit: 'cover'}} ref={videoRef} autoplay loop muted playsInline>
                <source src={videoSrc} type="video/mp4" />
                {/* Fallback for unsupported browsers */}
                Your browser does not support the video tag.
            </video>
        </Box>
        <VStack {...style.textWrp}>
          <Text fontSize="lg">
          Quando il cuore è predisposto, accadono meraviglie.
          </Text>

          <Text textAlign="justify">
            Davide, siciliano orgoglioso, dal carattere forte e libero. Mara, determinata ma timida, dolce e riservata.
            Due anime opposte, due mondi lontani, con pensieri che viaggiavano in direzioni diverse, fino al giorno in cui il destino decise di farli incontrare.
          </Text>

          <Text textAlign="justify">
            Era il 2021, a Treviso. Per lei, una città sconosciuta; per lui, un luogo da riscoprire. Si notarono, si cercarono, si conobbero.
          </Text>

          <Text textAlign="justify">
            Di Davide colpivano la solarità, il sorriso sincero, lo sguardo capace di raccontare verità senza bisogno di parole.
            Di Mara, la dolcezza e la semplicità, l’eleganza naturale che la rendeva unica ai suoi occhi.
          </Text>

          <Text textAlign="justify">
            In quel contesto nuovo e inatteso, le loro differenze si trasformarono in attrazione, i loro mondi si avvicinarono fino a fondersi.
            Era il <Highlight query="19 maggio 2021">19 maggio 2021</Highlight>, il giorno in cui tutto ebbe inizio.
          </Text>

          <Text textAlign="justify">
            Col tempo, quelle emozioni non solo si sono confermate, ma sono diventate più forti, più vere.
            E il <Highlight query="20 luglio 2024">20 luglio 2024</Highlight>, Davide ha fatto la sua promessa: le ha chiesto la mano.
          </Text>

          <Text textAlign="center">
            La loro storia non si conclude qui. Anzi, è appena cominciata...
          </Text>
        </VStack>
    </Flex>
  )
}

OurStory.propTypes = {}
export default OurStory

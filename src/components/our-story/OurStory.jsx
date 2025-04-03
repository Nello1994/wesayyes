import React, { useEffect, useRef } from "react"
import {
  useMultiStyleConfig,
  Box,
  VStack,
  Flex,
  Text,
  Highlight,
  Image,
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import videoSrc from "../../static/our_story.mp4"

const OurStory = () => {
  const style = useMultiStyleConfig("OurStory")

  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <VStack id='storia' {...style.mainContainer}>
      <VStack {...style.textWrp}>
        <Text {...style.title}>
          Quando il cuore è predisposto... accadono meraviglie.
        </Text>

        <Text {...style.paragraph} textAlign='center'>
          Davide, siciliano orgoglioso, dal carattere forte e libero. <br />
          Mara, determinata ma timida, dolce e riservata. <br />
          <br /> Due anime opposte, due mondi lontani, con pensieri che
          viaggiavano in direzioni diverse, fino al giorno in cui il destino
          decise di farli incontrare.
        </Text>

        <Text {...style.paragraph} textAlign='center'>
          Di Davide colpivano la solarità, il sorriso sincero, lo sguardo capace
          di raccontare verità senza bisogno di parole. Di Mara, la dolcezza e
          la semplicità, l’eleganza naturale che la rendeva unica ai suoi occhi.
        </Text>
        <Image
          src='src/assets/img/fiore-png.png'
          {...style.flowers1}
          alt='our story image'
        />
        <Image
          src='src/assets/img/fiore-png.png'
          {...style.flowers2}
          alt='our story image'
        />
      </VStack>
      <Box {...style.videoWrp}>
        <video
          style={{
            width: "900px",
            height: "100%",
            borderRadius: "50px",
            objectFit: "cover",
            aspectRatio: "16/9",
          }}
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type='video/mp4' />
          {/* Fallback for unsupported browsers */}
          Your browser does not support the video tag.
        </video>
      </Box>

      <Flex {...style.section}>
        <Box {...style.sectionImage}>
          <Image
            src='src/assets/img/bg-flowers.jpg'
            alt='our story image'
            {...style.image1}
          />
          <Image
            src='src/assets/img/ourstory_2.jpeg'
            alt='our story image'
            {...style.image2}
          />
        </Box>

        <Box {...style.text2}>
          <Text textAlign='center'>
            Le loro differenze si trasformarono in attrazione, i loro mondi si
            avvicinarono fino a fondersi. Era il <b>19 maggio 2021</b>, il
            giorno in cui tutto ebbe inizio.
          </Text>
          <br />
          <Text textAlign='center'>
            Col tempo, quelle emozioni non solo si sono confermate, ma sono
            diventate più forti, più vere.
            <br />
            <br />
            Il <b>20 luglio 2024</b>, Davide ha fatto la sua promessa: le ha
            chiesto la mano. La loro storia non si conclude qui. Anzi, è appena
            cominciata...
          </Text>
        </Box>
      </Flex>
    </VStack>
  )
}

OurStory.propTypes = {}
export default OurStory

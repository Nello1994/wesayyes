import React /* , { useState, useEffect } */ from "react"
import PropTypes from "prop-types"

// Components
import {
  useMultiStyleConfig,
  Text,
  Box,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react"

// Import Media
import image1 from "../../assets/img/Save_the_Date_2.jpeg"
import image2 from "../../assets/img/our_story.jpg"
import image3 from "../../assets/img/Save_the_Date_1.jpeg"

const SaveTheDate = () => {
  const style = useMultiStyleConfig("SaveTheDate")
  const mediaBoxes = [1, 2, 3]

  const imageUrls = {
    1: image1,
    2: image2,
    3: image3,
  }

  return (
    <HStack {...style.stack} /* height={stackHeight} */>
      <Box {...style.textWrp}>
        <Text {...style.title}>Save the date</Text>
        <Box display={{ base: "none", lg: "block" }}>
          <Text {...style.subtitle}>12 Settembre 2025</Text>
          <Text>ore 16.00</Text>
          <Text>Cattedrale di San Giovanni Battista, Ragusa</Text>
          <Text mt={"8px"} pt={"8px"} borderTop={"1px solid grey"}>
            Dopo la cerimonia festeggeremo presso il <br /> "Poggio del Sole
            Resort", Ragusa
          </Text>
        </Box>
      </Box>
      <Flex
        className='hideScrollBar'
        {...style.mediaWrp}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {mediaBoxes.map((item) => (
          <Box key={item} {...style.mediaBox}>
            <Image
              src={imageUrls[item]}
              alt={`image-${item}`}
              {...style.image}
            />
          </Box>
        ))}
      </Flex>
      <Box {...style.textWrp} display={{ base: "block", lg: "none" }}>
        <Text {...style.subtitle}>12 Settembre 2025</Text>
        <Text>ore 16.00</Text>
        <Text>Cattedrale di San Giovanni Battista, Ragusa</Text>
        <Text mt={"8px"} pt={"8px"} borderTop={"1px solid grey"}>
          Dopo la cerimonia festeggeremo presso il <br /> "Poggio del Sole
          Resort", Ragusa
        </Text>
      </Box>
    </HStack>
  )
}

SaveTheDate.propTypes = {
  description: PropTypes.string,
}

export default SaveTheDate

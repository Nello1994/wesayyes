import { Box, Flex, Text, Image, keyframes, useMultiStyleConfig } from "@chakra-ui/react";

const scrollAnimation = keyframes`
  from { transform: translateX(100vw); }
  to { transform: translateX(-100%); }
`;

const ScrollingText = () => {

  const style = useMultiStyleConfig('ScrollingText')
  return (
    <Box {...style.mainWrapper}>
      <Box {...style.animationWrapper}
        animation={`${scrollAnimation} 10s linear infinite`}
      >
        <Flex {...style.content}>
          <Image {...style.img} src={'src/assets/img/flowers.jpg'}></Image>
          <Text>Questo è un testo che scorre su tutta la viewport!</Text>
          <Image {...style.img} src={'src/assets/img/flowers.jpg'}></Image>
        </Flex>
      </Box>
    </Box>
  );
};

export default ScrollingText;

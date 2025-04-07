import { Typ, Colors } from "../utils"

export default {
  baseStyle: {
    stack: {
      w: "100%",
      padding: { base: "40px 0 40px", lg: "80px 80px 120px" },
      gap: { base: "32px", lg: "120px" },
      flexDirection: { base: "column", lg: "row" },
    },
    title: {
      ...Typ.custom_large,
    },

    subtitle: {
      ...Typ.komika,
      mt: { lg: "32px" },
      textAlign: "center",
    },
    mediaWrp: {
      width: { base: "100%", lg: "50%" },
      flex: { base: "unset", lg: "1 1 0" },
      gap: { base: "16px", lg: "32px" },
      overflowX: { base: "auto", lg: "unset" },
      padding: { base: "0 32px", lg: "0" },
      maxW: { base: "unset", lg: "59.027vw" },
    },
    textWrp: {
      flex: "0 0 auto",
      textAlign: "center",
      px: { base: "16px", lg: "0" },
      w: { lg: "25%" },
      //order: { base: "2", lg: "unset" },
    },
    mediaBox: {
      aspectRatio: "1/2",
      flex: { base: "none", sm: "1 1 0" },
      maxWidth: { base: "230px", lg: "unset" },
      position: "relative",
      h: "auto",
    },

    image: {
      //filter: "grayscale(100%)",
      filter: "sepia(60%) contrast(100%) brightness(95%) saturate(90%)",
      opacity: "0.9",
      mixBlendMode: "normal",
      h: "100%",
      aspectRatio: "1/2",
      objectFit: "cover",
      borderRadius: "250px",
      transition: { lg: ".5s ease-in-out" },

      _hover: {
        transform: { lg: "scale(1.1)" },
      },
    },
  },
  variants: {},
}

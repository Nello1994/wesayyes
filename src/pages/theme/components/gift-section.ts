import { Typ } from "../utils"

export default {
  baseStyle: {
    giftWrp: {
      bg: "#FFEEBB",
      padding: { base: "40px 24px", lg: "80px 40px" },
      m: { base: "40px 16px", lg: "80px auto 80px" },
      maxW: { lg: "1200px" },
      borderRadius: { base: "30px" },
    },

    textWrp: {
      backgroundColor: "#FFEEBB",
      w: "100%",
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      pos: "relative",
    },

    title: {
      mb: { base: "16px", lg: "0" },
      ...Typ.komika,
      lineHeight: { base: "32px", lg: "" },
    },

    paragraph: {
      ...Typ.body_light,
      maxW: "760px",
    },

    flowers1: {
      w: "150px",
      pos: "absolute",
      left: 0,
      display: { base: "none", xl: "block" },
    },

    flowers2: {
      w: "150px",
      pos: "absolute",
      right: 0,
      transform: "scale(-1, 1)",
      zIndex: "1",
      display: { base: "none", xl: "block" },
    },
  },
  variants: {},
}

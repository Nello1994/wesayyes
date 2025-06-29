import { Typ } from "../utils"

export default {
  baseStyle: {
    outerBox: {
      display: "flex",
      flexDirection: "column",
    },
    wallpaper: {
      p: { base: "40px 24px", lg: "40px" },
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      mt: { base: "17vw", lg: "120px" },
    },
    formBox: {
      w: "100%",
    },
    formWrp: {
      maxW: { base: "unset", lg: "500px" },
      m: { base: "0 auto" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "24px",
      bg: "rgba(111,108,75,0.8)",
      p: "24px",
      borderRadius: "24px",
    },

    inputWrp: {
      alignItems: "left",
      gap: "16px",
      w: "100%",
      /* mb: "32px", */
    },

    formText: {
      ...Typ.custom_large,
      mb: "32px",
      textAlign: "center",
      color: "white",
    },

    labelText: {
      color: "white",
    },

    formButton: {
      width: "100%",
      mt: "32px",
      p: "16px",
      background: "#ffe791",
      ...Typ.body_light,

      _hover: {
        background: "#cea100",
        color: "white",
      },
    },
  },
  variants: {},
}

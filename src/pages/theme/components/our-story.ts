import { Typ } from "../utils"

export default {
  baseStyle: {
    mainContainer: {
      h: { base: "100%" },
      /* flexDirection: {base: 'column', lg: 'row'}, */
      gap: { base: "0" },
    },
    textWrp: {
      //flex: "0 0 50%",
      backgroundColor: "#FFEEBB",
      w: "100%",
      padding: { base: "40px" },
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      pos: "relative",

      _after: {
        content: '""',
        backgroundColor: "#FFEEBB",
        pos: "absolute",
        bottom: "0",
        width: "100%",
        height: "160px",
        transform: { base: "translateY(120px)", lg: "translateY(160px)" },
      },
    },

    sectionImage: {
      pos: "relative",
      display: "flex",
      flex: "0 0 auto",
      order: { base: "2", lg: "unset" },
    },

    section: {
      p: { base: "16px", lg: "160px" },
      alignItems: "center",
      flexDir: { base: "column", lg: "row" },
      gap: { base: "72px", lg: "0" },
    },

    text: {
      textAlign: "center",
    },

    text2: {
      w: { lg: "40%" },
      flex: "none",
      ml: { lg: "240px" },
      px: { base: "24px" },
      //p: { base: "0 48px", lg: "0" },
      ...Typ.body_light,
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
      w: "300px",
      pos: "absolute",
      left: 0,
      display: { base: "none", lg: "block" },
    },

    flowers2: {
      w: "300px",
      pos: "absolute",
      right: 0,
      transform: "scale(-1, 1)",
      zIndex: "1",
      top: "50%",
      display: { base: "none", lg: "block" },
    },

    image1: {
      aspectRatio: "1/1",
      objectFit: "cover",
      borderRadius: "50px",
      w: { base: "50%", lg: "300px", xl: "400px" },
    },

    image2: {
      position: { base: "static", lg: "absolute" },
      top: { lg: "40%" },
      left: { lg: "40%" },
      transform: { base: "translate(-20%,20%)", lg: "unset" },
      aspectRatio: "1/1",
      objectFit: "cover",
      borderRadius: "50px",
      w: { base: "50%", lg: "400px" },
    },

    videoWrp: {
      zIndex: "1",
      p: { base: "24px", lg: "0" },
    },
  },
  variants: {},
}

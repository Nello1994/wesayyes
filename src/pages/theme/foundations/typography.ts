/**
 * Instructions for Use:
 * the name of the typography follows the following scheme:
 * for Kalnia font family: [PRIMARY FONT]
 * {name_of_typography}_ext_{reg|sem for regular or semibold}
 * for Cabin font family: [SECONDARY FONT]
 * {name_of_typography}_{reg|sem for regular or semibold}
 */

const typography = {
  h1_ext_sem: {
    fontFamily: 'Kalnia',
    fontSize: { base: '72px' },
    fontWeight: 700,
    lineHeight: { base: '72px' },
  },
  h1_ext_reg: {
    fontFamily: 'Kalnia',
    fontSize: { base: '72px' },
    fontWeight: 550,
    lineHeight: { base: '72px' },
  },
  h2_ext_sem: {
    fontFamily: 'Kalnia',
    fontSize: { base: '48px' },
    fontWeight: 700,
    lineHeight: { base: '48px' },
  },
  h2_ext_reg: {
    fontFamily: 'Kalnia',
    fontSize: { base: '48px' },
    fontWeight: 550,
    lineHeight: { base: '48px' },
  },
  h1_sem: {
    fontFamily: 'Cabin',
    fontSize: { base: '72px' },
    fontWeight: 700,
    lineHeight: { base: '72px' },
  },
  h1_reg: {
    fontFamily: 'Cabin',
    fontSize: { base: '72px' },
    fontWeight: 500,
    lineHeight: { base: '72px' },
  },
  h2_sem: {
    fontFamily: 'Cabin',
    fontSize: { base: '48px' },
    fontWeight: 700,
    lineHeight: { base: '48px' },
  },
  h2_reg: {
    fontFamily: 'Cabin',
    fontSize: { base: '48px' },
    fontWeight: 500,
    lineHeight: { base: '48px' },
  },
  caption_sem: {
    fontFamily: 'Cabin',
    fontSize: { base: '32px' },
    fontWeight: 700,
    lineHeight: { base: '32px' },
  },
  caption_reg: {
    fontFamily: 'Cabin',
    fontSize: { base: '32px' },
    fontWeight: 500,
    lineHeight: { base: '32px' },
  },
  captionS_sem: {
    fontFamily: 'Cabin',
    fontSize: { base: '24px' },
    fontWeight: 700,
    lineHeight: { base: '24px' },
  },
  captionS_reg: {
    fontFamily: 'Cabin',
    fontSize: { base: '24px' },
    fontWeight: 500,
    lineHeight: { base: '24px' },
  },
  body_light: {
    fontFamily: 'Cabin',
    fontSize: { base: '18px' },
    fontWeight: 400,
    lineHeight: { base: '32px' },
  },
}

export default typography

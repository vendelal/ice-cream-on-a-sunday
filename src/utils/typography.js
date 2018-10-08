import Typography from 'typography'

const brandColor = "#EF3E23"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  color: brandColor,
  headerFontFamily: [
    "CircularStd-Bold",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "CircularStd-Book",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Ahkio-Bold', 'sans-serif'].join(','),
      fontSize: "45px",
    },
    h2: {
      fontFamily: ['Ahkio-Bold', 'sans-serif'].join(','),
    },
  })
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

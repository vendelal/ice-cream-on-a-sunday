import Typography from 'typography'
import Type from '../styles/Typography.scss'

const brandColor = "#EF3E23"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  color: brandColor,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

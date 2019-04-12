import Typography from 'typography'
import { Colors, Sizes } from '../styles/variables'

const typography = new Typography({
  baseFontSize: '16px',
  bodyColor: Colors.textColor,
  baseLineHeight: 1.5,
  headerFontFamily: [
    'CircularStd-Bold',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'CircularStd-Book',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Ahkio-Bold', 'sans-serif'].join(','),
      fontSize: Sizes.fontSizeLarge,
      color: Colors.headerColor,
    },
    h2: {
      fontFamily: ['Ahkio-Bold', 'sans-serif'].join(','),
    },
    time: {
      color: Colors.headerColor,
      fontFamily: ['CircularStd-Black', 'sans-serif'].join(','),
      fontSize: Sizes.fontSizeSmall,
      fontWeight: '900',
      display: 'block',
      letterSpacing: '0.75px',
      marginBottom: '0.4rem',
      textTransform: 'uppercase',
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

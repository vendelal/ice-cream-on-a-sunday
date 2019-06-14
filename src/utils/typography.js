import Typography from 'typography'
import { Colors, Sizes } from '../styles/variables'

const typography = new Typography({
  baseFontSize: '16px',
  bodyColor: Colors.textColor,
  baseLineHeight: 1.5,
  baseFontWeight: 400,
  headerFontFamily: [
    'Ahkio-Regular',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Circular-Regular',
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Ahkio-Regular', 'sans-serif'].join(','),
      fontSize: Sizes.fontSizeLarge,
      fontWeight: 'normal',
      color: Colors.headerColor,
    },
    h2: {
      fontFamily: ['Ahkio-Regular', 'sans-serif'].join(','),
    },
    h3: {
      fontFamily: ['Circular-Regular', 'sans-serif'].join(','),
    },
    time: {
      color: Colors.headerColor,
      fontFamily: ['Circular-Bold', 'sans-serif'].join(','),
      fontSize: Sizes.fontSizeSmall,
      fontWeight: '600',
      display: 'block',
      letterSpacing: '0.75px',
      marginBottom: '0.4rem',
      textTransform: 'uppercase',
    },
    a: {
      textDecoration: 'none',
      cursor: 'pointer',
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography

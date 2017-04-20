/*
 * Created by Thomas Hartmann
 * A colorsheet for the material UI components.
 */

import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Here is a list of everything that can be overridden and their default values:
// (more information available here: http://www.material-ui.com/#/customization/themes)
/* {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
} */

// Customize the theme here. E.g:
export default getMuiTheme({
  palette: {
    primary1Color: '#097C84', // DNB-green
    primary2Color: '#F67F00', // DNB-orange
  },
  appBar: { // NOTE: we're not actually using this, but it shows you can style individual components
    height: 50
  }
})

import Colors from 'material-ui/lib/styles/colors'
import spacing from 'material-ui/lib/styles/spacing'
import ColorManipulator from 'material-ui/lib/utils/color-manipulator'

export default {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blue700,
    primary2Color: Colors.blue500,
    primary3Color: Colors.blue100,
    accent1Color: Colors.deepOrange500,
    accent2Color: Colors.deepOrange500,
    accent3Color: Colors.deepOrange500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.blue500
  }
}

import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primaryColor: '#0366d6',
      mainBackgroundColor:'#e1e4e8',
      appBarBackgroundColor: '#24292e',
    //   mainBackgroundColor: '#e1e4e8'
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      heading: 25
    },
    fonts: Platform.select( {
      android: 'Roboto',
      ios: 'Arial',

      default: 'System',
    }),
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;
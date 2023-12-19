
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greet from './src/Greet';
import Main from './src/Main';
import FlexboxExample from './src/FlexBoxExample';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <>
      <NativeRouter>
       <Main />
       </NativeRouter>
       <StatusBar style='auto' />
    </>
  
 
  
  
  )
  // return <FlexboxExample />
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

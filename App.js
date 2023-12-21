// import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// if (__DEV__) {  // Adds messages only in a dev environment
//   loadDevMessages();
//   loadErrorMessages();
// }
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import Main from './src/Main';
import createApolloClient from './src/utils/apolloClient';

import { NativeRouter } from 'react-router-native';
import Constants from 'expo-constants'
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/context/AuthStorageContext';


const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage)

export default function App() {
  console.log(Constants.manifest.extra.env)
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
            <AuthStorageContext.Provider value={authStorage}>  
              <Main />
            </AuthStorageContext.Provider>
        </ApolloProvider>
       
       </NativeRouter>
       {/* <StatusBar style='auto' /> */}
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

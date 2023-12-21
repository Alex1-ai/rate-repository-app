import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTap';
import theme from '../appTheme';
import { useQuery } from '@apollo/client';
import { IS_AUTHENTICATED } from '../graphql/queries';
import useSignIn from '../hooks/useSignIn';
// You can define the background color in the theme configuration if needed.

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    // marginBottom:5,
    backgroundColor: theme.colors.appBarBackgroundColor, // Set the background color as needed
    // backgroundColor: '#24292e', // Set the background color as needed
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 100,
  },

  scrollViewStyle:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  tabText: {
    color: '#fff',
    fontSize: theme.fontSizes.heading,
    fontWeight: 'bold',
    marginRight: 10,
    padding: 5,
    // backgroundColor:'yellow'
  },

 
  
});


const AppBar = () => {
  const [signIn, _, signOut] = useSignIn()
  const { data, error , loading} = useQuery(IS_AUTHENTICATED);
  const isAuthenticated = data && data?.me;
  console.log(isAuthenticated)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}  horizontal>
            <AppBarTab text="Repositories" routeName={'/'}/>
            {/* <AppBarTab text="Signin" routeName={'/signin'} func={signOut}/> */}
            {isAuthenticated !== null? (
              // <AppBarTab text="SignOut" routeName={'/signout' }  />
          <Pressable onPress={signOut}>
            <Text style={styles.tabText}>Sign Out</Text>
          </Pressable>
        ) : (
          <AppBarTab text="Signin" routeName={'/signin'} />
        )}
            {/* { isAuthenticated !== null?  <AppBar text="Sign Out" routeName={'/signout'} />: <AppBarTab text="Signin" routeName={'/signin'}/>}; */}
           
      </ScrollView>
      {/* You can add more AppBarTabs for additional tabs */}
    </View>
  );
};

export default AppBar;

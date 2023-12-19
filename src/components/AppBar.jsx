import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTap';
import theme from '../appTheme';
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

 
  
});


const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}  horizontal>
            <AppBarTab text="Repositories" routeName={'/'}/>
            <AppBarTab text="Signin" routeName={'/signin'}/>
           
      </ScrollView>
      {/* You can add more AppBarTabs for additional tabs */}
    </View>
  );
};

export default AppBar;

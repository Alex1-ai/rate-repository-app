import React from 'react'
import Constants from 'expo-constants'
import { View, StyleSheet, Text } from 'react-native'
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './components/AppBar';
import theme from './appTheme'
import SignIn from './SignIn';


const styles = StyleSheet.create({
    container: {
      
      flexGrow: 1,
      flexShrink: 1,
      // backgroundColor: '#e1e4e8'
      backgroundColor: theme.colors.mainBackgroundColor
      
    },
  });
  
  const Main = () => {
    return (
     
      <View style={styles.container}>
        <AppBar />
        <Routes>
           <Route path='/' element={<RepositoryList />} />
           <Route path='/signin' element={<SignIn />} />
           <Route path='*' element={<Navigate to='/' replace />}  />
          
        </Routes>
        
      </View>
      
    );
  };

export default Main
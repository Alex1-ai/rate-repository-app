import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { Link, Navigate } from 'react-router-native';
import theme from '../appTheme';

const styles = StyleSheet.create({
    tabText: {
        color: '#fff',
        fontSize: theme.fontSizes.heading,
        fontWeight: 'bold',
        marginRight: 10,
        padding: 5,
        // backgroundColor:'yellow'
      },
})

const AppBarTab = ({ text, routeName }) => {
    return (
      <Pressable onPress={() => { }}>
        <Link  to={routeName}>
        <Text style={styles.tabText}>{text}</Text>
        </Link>
      </Pressable>
    );
  };

export default AppBarTab
import React from 'react'
import { Text as MyText, StyleSheet } from 'react-native'


const styles = StyleSheet.create({

})
const Text = ({ style, error}) => {

    const styleText = [style]
  return (
    <MyText style={styleText}>{error}</MyText>
  )
}

export default Text
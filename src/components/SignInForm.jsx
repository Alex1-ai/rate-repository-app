import React from 'react'

import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from './FormikTextInput'
import theme from '../appTheme'

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: 280,
    },
    inputStyle:{
        padding: 15,
        fontSize: theme.fontSizes.subheading,
        marginHorizontal: 20,
        marginTop : 20,
        borderWidth: 0.8,
    },

    buttonStyle:{
        backgroundColor: theme.colors.primaryColor,
        // alignItems: 'center'
       

        
        marginHorizontal:20,
        marginTop: 20,
        // alignSelf: 'center',
        // flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        

    

    },
    textButtonStyle:{
        color: 'white',
        padding: 15,
        fontSize: theme.fontSizes.heading,
        fontWeight: 'bold'
    }




})

const SignInForm = ({ onSubmit})=>{
    
    // const [ usernameField, usernameMeta, usernameHelper ] = useField('username')
    // const [ passwordField, passwordMeta, passwordHelper ] = useField('password')
    return (
        <View style={styles.container}>
            <FormikTextInput style={styles.inputStyle} name="username" placeholder="username" />
            <FormikTextInput style={styles.inputStyle} name="password" placeholder="password" secureTextEntry={true} />
            {/* <TextInput 
               placeholder='Enter Username'
               vallue={usernameField.value}
               onChangeText={text=>usernameHelper.setValue(text)}
            
            />

            <TextInput
               placeholder='Enter Password'
               value={passwordField.value}
               onChangeText={text=>passwordHelper.setValue(text)}
            
            /> */}


            <Pressable style={styles.buttonStyle} onPress={onSubmit}>
                <Text  style={styles.textButtonStyle}> Sign In</Text>
            </Pressable>
        </View>

    );
}

export default SignInForm
import React from 'react'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'
// import { Text } from 'react-native'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    errorText:{
        marginTop: 5,
        marginLeft: 20,
        color: 'red'
    }
})

const FormikTextInput = ({name, ...props}) => {
    const [ field , meta, helpers ] = useField(name)
    const showError = meta.touched && meta.error
  return (
    <>
       <TextInput 
          onChangeText={value => helpers.setValue(value)}
          onBlur={()=>helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
       
       />

       { showError && <Text style={styles.errorText} error={meta.error} />}
    
    </>
  )
}

export default FormikTextInput
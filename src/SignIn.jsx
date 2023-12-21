import React from 'react'
import { Text, TextInput, Pressable, View } from 'react-native'
import { Formik, useField } from 'formik'
import SignInForm from './components/SignInForm'


import * as yup from 'yup';
import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
const initialValues = {
    username: '',
    password: ''

}

// const SignInForm = ({ onSubmit})=>{
//     const [ usernameField, usernameMeta, usernameHelper ] = useField('username')
//     const [ passwordField, passwordMeta, passwordHelper ] = useField('password')
//     return (
//         <View>
//             <TextInput 
//                placeholder='Enter Username'
//                vallue={usernameField.value}
//                onChangeText={text=>usernameHelper.setValue(text)}
            
//             />

//             <TextInput
//                placeholder='Enter Password'
//                value={passwordField.value}
//                onChangeText={text=>passwordHelper.setValue(text)}
            
//             />


//             <Pressable onPress={onSubmit}>
//                 <Text> Sign In</Text>
//             </Pressable>
//         </View>

//     );
// }



const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});


const SignIn = () => {
    const [ signIn ] = useSignIn()
    const navigate = useNavigate()
    const onSubmit = async(values)=>{
        const { username, password } = values;
        
        try{
          await signIn({username, password})
          // console.log(data)
          navigate('/')
        }catch(e){
          console.log("error" ,e)
        }
        // if (!(username === '') && !(password === '')){
        //     console.log(values)

        // }else{
        //     console.log("NO input ")
        // }
        
    }
  return (
    // <Text>The sign-in view</Text>
    <>
      <Formik 

      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={onSubmit} 
      
      >
         {({handleSubmit})=> <SignInForm onSubmit={handleSubmit}/>}
      </Formik>
    </>
  )
}

export default SignIn
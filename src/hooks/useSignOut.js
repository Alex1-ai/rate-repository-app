import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import { useNavigate } from "react-router-native";


const signOut = async () => {
    const navigate = useNavigate()
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    try {
        console.log("singinout here ")
      await authStorage.removeAccessToken(); // Remove access token from storage
      await apolloClient.resetStore(); // Reset Apollo Client's store
      navigate('/signin')
    } catch (error) {
        console.log(error)
      throw error;
    }
  };

export default signOut
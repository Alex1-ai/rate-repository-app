import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from "react";
import AuthStorageContext from "../context/AuthStorageContext";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);

  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    try {
      const { data } = await mutate({
        variables: { username, password },
      });
      
    //   console.log(data.authenticate.accessToken)
      // Store the access token in AsyncStorage
      await authStorage.setAccessToken(data?.authenticate?.accessToken);

    //   const token = await authStorage.getAccessToken()
    //   console.log("useSign in",token)

      // Reset Apollo Client's store to clear the cache and re-execute queries
      await apolloClient.resetStore();

      return data;
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken(); // Remove access token from storage
      await apolloClient.resetStore(); // Reset Apollo Client's store
    } catch (error) {
      throw error;
    }
  };

  return [signIn, result, signOut];
};

export default useSignIn;

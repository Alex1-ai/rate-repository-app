import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessToken() {
        try {
            const accessToken = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
            // console.log("Getting access token")
            // console.log(accessToken)
            return accessToken ? JSON.parse(accessToken) : null;
        } catch (error) {
            console.error("Error while getting access token from AsyncStorage:", error);
            return null;
        }
    }

    async setAccessToken(accessToken) {
        try {
            // console.log("setting access token")
            await AsyncStorage.setItem(`${this.namespace}:accessToken`, JSON.stringify(accessToken));
            // console.log("completed setting")
        } catch (error) {
            console.error("Error while setting access token in AsyncStorage:", error);
        }
    }

    async removeAccessToken() {
        try {
            await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
        } catch (error) {
            console.error("Error while removing access token from AsyncStorage:", error);
        }
    }
}

export default AuthStorage;

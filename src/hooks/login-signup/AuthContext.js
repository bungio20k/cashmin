import { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

const getLocalToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@accessToken')
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e);
    }
}

const setLocalToken = async (token) => {
    try {
        await AsyncStorage.setItem('@accessToken', token)
    } catch (e) {
        console.log(e);
    }
}

export const AuthProvider = ({ children }) => {
    const [token, changeToken] = useState(getLocalToken())
    const [auth, changeAuth] = useState(token != null);
    
    const setToken = (newToken) => {
        changeToken(newToken);
        setLocalToken(newToken);
    }
    const setAuth = (value) => {
        changeAuth(value)
    }
    
    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                token,
                setToken,
            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
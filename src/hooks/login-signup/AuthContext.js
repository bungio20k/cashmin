import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

const getLocalToken = async () => {
  try {
    const token = await AsyncStorage.getItem("@accessToken");
    if (token !== null) {
      return token;
    }
  } catch (e) {
    console.log(e);
  }
};

const setLocalToken = async (token) => {
  try {
    await AsyncStorage.setItem("@accessToken", token);
  } catch (e) {
    console.log(e);
  }
};

export const AuthProvider = ({ children }) => {
  const [token, changeToken] = useState(null);
  const [auth, changeAuth] = useState(false);

  useEffect(async () => {
    const token = await getLocalToken();
    if (token != null) changeAuth(true);
    changeToken(token);
  }, []);

  const setToken = (newToken) => {
    changeToken(newToken);
    setLocalToken(newToken);
  };

  const setAuth = (value) => {
    changeAuth(value);
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("@accessToken");
    } catch (e) {
      console.error(e);
    }
    setToken(null);
    changeAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

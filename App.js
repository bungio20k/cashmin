import { NativeBaseProvider } from "native-base";

// Authentication
import { AuthProvider } from "./src/hooks/login-signup/AuthContext";
import AuthRedirect from "./src/containers/AuthRedirect";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Axios config

import { BASE_URL } from "@env";
import axios from "axios";

// axios.defaults.baseURL = `http://${BASE_URL}:3001/api/v1`;
axios.defaults.baseURL = `http://192.168.1.9:3001/api/v1`;

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  // AsyncStorage.clear();
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <AuthRedirect />
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

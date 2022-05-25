import { NativeBaseProvider } from "native-base";

// Authentication
import { AuthProvider } from "./src/hooks/login-signup/AuthContext";
import AuthRedirect from "./src/containers/AuthRedirect";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// data
import { DataProvider } from "./src/hooks/data/DataContext";

// Axios config

import { BASE_URL } from "@env";
import axios from 'axios';

axios.defaults.baseURL = `http://${BASE_URL}:3001/api/v1`;

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <DataProvider>
            <AuthRedirect />
          </DataProvider>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthProvider>
  );
}

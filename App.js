import { NativeBaseProvider } from "native-base";

// Authentication
import { AuthProvider } from "./src/hooks/login-signup/AuthContext";
import AuthRedirect from "./src/containers/AuthRedirect";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// data
import { DataProvider } from "./src/hooks/data/DataContext";

// Axios config
import axios from "axios";
// axios.defaults.baseURL = 'http://192.168.137.1:3001/api/v1';
axios.defaults.baseURL = "http://192.168.1.4:3001/api/v1";

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

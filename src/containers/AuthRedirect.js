import AuthNavigator from "src/navigation/AuthNavigator";
import TabNavigator from "src/navigation/TabNavigator";
import AuthContext from "../hooks/login-signup/AuthContext";
import { useContext } from "react";
import { DataProvider } from "../../src/hooks/data/DataContext";
export default function AuthRedirect() {
    const { auth } = useContext(AuthContext);
    return (
        <>
            {!auth && <AuthNavigator />}
            {auth &&
                <DataProvider>
                    <TabNavigator />
                </DataProvider>
            }
        </>
    )
}
// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import AuthContext from "../login-signup/AuthContext";

// const DataContext = createContext({});

// export const DataProvider = ({ children }) => {
//   const [profile, changeProfile] = useState({});
//   const [settings, changeSettings] = useState({});
//   const [limits, changeLimits] = useState({});
//   const [wallets, changeWallets] = useState([]);
//   const [debits, changeDebits] = useState([]);
//   const [categories, changeCategories] = useState([]);
//   const [username, setUsername] = useState("");

//   const { setAuth, token } = useContext(AuthContext);

//   const fetch = async () => {
//     try {
//       const res = await axios.get("/users/user-info", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       return res.data;
//     } catch (err) {
//       // outdated token
//       if (err.response.status == 403) setAuth(false);
//       else {
//         // network error
//       }
//     }
//   };

//   useEffect(async () => {
//     if (token != null) {
//       const newData = await fetch().catch((err) => console.log(err));
//       changeProfile(
//         newData?.profile || { fullName: "", phoneNumber: "", birthday: "" }
//       );

//       changeSettings(newData.settings);
//       changeLimits(newData.limits);
//       changeWallets(newData.wallets);
//       changeDebits(newData.debits);
//       changeCategories(newData.categories);
//       setUsername(newData.username);

//     }
//   }, [token]);

//   return (
//     <DataContext.Provider
//       value={{
//         username,
//         profile,
//         setProfile: (value) => changeProfile(value),
//         settings,
//         setSettings: (value) => changeSettings(value),
//         limits,
//         setLimits: (value) => changeLimits(value),
//         wallets,
//         setWallets: (value) => changeWallets(value),
//         debits,
//         setDebits: (value) => changeDebits(value),
//         categories,
//         setCategories: (value) => changeCategories(value),
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataContext;

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../login-signup/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DataContext = createContext({});

const defaultProfile = { fullName: "", phoneNumber: "", birthday: "" };

const defaultSettings = {
    language: 'Tiếng việt',
    dateFormat: 'dd/mm/yyyy',
    currency: 'VNĐ(đ)',
    hideMoney: true,
    reminder: false,
    weekStart: 1,
    monthStart: 1,
    yearStart: 1
};
const defaultLimits = {
    daily: {
        isActive: false
    },
    weekly: {
        isActive: false
    },
    monthly: {
        isActive: false
    }
}
const defaultCategories = [
    { name: 'Chung', icon: 'apps' },
    { name: 'Ăn uống', icon: 'fast-food' },
    { name: 'Thuê nhà', icon: 'home' },
    { name: 'Điện nước', icon: 'bulb' },
    { name: 'Đi lại', icon: 'bicycle' },
    { name: 'Sửa chữa', icon: 'build' },
    { name: 'Mua sắm', icon: 'basket' },
    { name: 'Tiết kiệm', icon: 'analytics' },
    { name: 'Dự phòng', icon: 'alert' },
]

export const DataProvider = ({ children }) => {
    const [profile, changeProfile] = useState(defaultProfile);
    const [settings, changeSettings] = useState(defaultSettings);
    const [limits, changeLimits] = useState(defaultLimits);
    const [wallets, changeWallets] = useState([]);
    const [debits, changeDebits] = useState([]);
    const [categories, changeCategories] = useState(defaultCategories);
    const [username, setUsername] = useState("");

    const { token } = useContext(AuthContext);

    useEffect(async () => {
        let localProfile = JSON.parse(await AsyncStorage.getItem('profile'));
        if (localProfile == null) {
            await AsyncStorage.setItem('profile', JSON.stringify(defaultProfile));
            localProfile = defaultProfile;
        }

        let localSettings = JSON.parse(await AsyncStorage.getItem('settings'));
        if (localSettings == null) {
            await AsyncStorage.setItem('settings', JSON.stringify(defaultSettings));
            localSettings = defaultSettings;
        }

        let localLimits = JSON.parse(await AsyncStorage.getItem('limits'));
        if (localLimits == null) {
            await AsyncStorage.setItem('limits', JSON.stringify(defaultLimits));
            localLimits = defaultLimits;
        }

        let localWallets = JSON.parse(await AsyncStorage.getItem('wallets'));
        if (localWallets == null) {
            await AsyncStorage.setItem('wallets', "[]");
            localWallets = [];
        }

        let localDebits = JSON.parse(await AsyncStorage.getItem('debits'));
        if (localDebits == null) {
            await AsyncStorage.setItem('debits', "[]");
            localDebits = [];
        }

        let localCategories = JSON.parse(await AsyncStorage.getItem('categories'));
        if (localCategories == null) {
            await AsyncStorage.setItem('categories', JSON.stringify(defaultCategories));
            localCategories = defaultCategories;
        }

        let localUsername = await AsyncStorage.getItem('username');
        if (localUsername == null) {
            await AsyncStorage.setItem('username', "");
            localUsername = "";
        }

        // provide data as a provider
        changeProfile(localProfile);
        changeSettings(localSettings);
        changeLimits(localLimits);
        changeWallets(localWallets);
        changeDebits(localDebits);
        changeCategories(localCategories);
        setUsername(localUsername);

        // try to sync data
        if (token != null) {
            const res = await axios.post('/users/user-info', {
                profile: localProfile,
                settings: localSettings,
                limits: localLimits,
                wallets: localWallets,
                debits: localDebits,
                categories: localCategories
            }, {
                headers: {
                    Authorization: "Bearer " + token,
                }
            })
            console.log(res);
        }

    }, [token]);

    return (
        <DataContext.Provider
            value={{
                username,
                profile,
                setProfile: async (value) => {
                    changeProfile(value);
                    try {
                        await AsyncStorage.setItem('profile', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
                settings,
                setSettings: async (value) => {
                    changeSettings(value);
                    try {
                        await AsyncStorage.setItem('settings', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
                limits,
                setLimits: async (value) => {
                    changeLimits(value);
                    try {
                        await AsyncStorage.setItem('limits', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
                wallets,
                setWallets: async (value) => {
                    changeWallets(value);
                    try {
                        await AsyncStorage.setItem('wallets', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
                debits,
                setDebits: async (value) => {
                    changeDebits(value);
                    try {
                        await AsyncStorage.setItem('debits', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
                categories,
                setCategories: async (value) => {
                    changeProfile(value);
                    try {
                        await AsyncStorage.setItem('categories', JSON.stringify(value));
                    }
                    catch (err) {
                        console.log(err);
                    }
                },
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;

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
    const [username, changeUsername] = useState("");

    const setUsername = async (value) => {
        changeUsername(value);
        try { await AsyncStorage.setItem('username', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setProfile = async (value) => {
        changeProfile(value);
        try { await AsyncStorage.setItem('profile', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setSettings = async (value) => {
        changeSettings(value);
        try { await AsyncStorage.setItem('settings', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setLimits = async (value) => {
        changeLimits(value);
        try { await AsyncStorage.setItem('limits', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setWallets = async (value) => {
        changeWallets(value);
        try { await AsyncStorage.setItem('wallets', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setDebits = async (value) => {
        changeDebits(value);
        try { await AsyncStorage.setItem('debits', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const setCategories = async (value) => {
        changeCategories(value);
        try { await AsyncStorage.setItem('categories', JSON.stringify(value)); }
        catch (err) { console.log(err); }
    }

    const { token } = useContext(AuthContext);

    useEffect(async () => {
        if (token != null) {
            if (await AsyncStorage.getItem('profile') == null) {
                // fetch data
                try {
                    const res = await axios.get("/users/user-info", {
                        headers: {
                            Authorization: "Bearer " + token,
                        },
                    });
                    setUsername(res.data.username);
                    setProfile(res.data.profile);
                    setSettings(res.data.settings);
                    setLimits(res.data.limits);
                    setWallets(res.data.wallets);
                    setDebits(res.data.debits);
                    setCategories(res.data.categories);
                }
                catch (err) {
                    // outdated token
                    if (err.response.status == 403) setAuth(false);
                    else {
                        // no network
                        setUsername("");
                        setProfile(defaultProfile);
                        setSettings(defaultSettings);
                        setLimits(defaultLimits);
                        setWallets([]);
                        setDebits([]);
                        setCategories(defaultCategories);
                    }
                }

            }
            else {
                changeUsername(await AsyncStorage.getItem('username'));
                changeProfile(JSON.parse(await AsyncStorage.getItem('profile')));
                changeSettings(JSON.parse(await AsyncStorage.getItem('settings')));
                changeLimits(JSON.parse(await AsyncStorage.getItem('limits')));
                changeWallets(JSON.parse(await AsyncStorage.getItem('wallets')));
                changeDebits(JSON.parse(await AsyncStorage.getItem('debits')));
                changeCategories(JSON.parse(await AsyncStorage.getItem('categories')));
            }
        }
    }, [token]);

    // useEffect(async () => {
    //     // sync profile
    //     const res = await axios.post(
    //         '/users/user-info',
    //         { typ: "profile", data: profile },
    //         { headers: { Authorization: "Bearer " + token } }
    //     )
    //     console.log(res);
    // }, [profile]);

    // useEffect(async () => {
    //     // sync settings
    //     const res = await axios.post(
    //         '/users/user-info',
    //         { typ: "settings", data: settings },
    //         { headers: { Authorization: "Bearer " + token } }
    //     )
    //     console.log(res);
    // }, [settings]);

    // useEffect(async () => {
    //     // sync limits
    //     const res = await axios.post(
    //         '/users/user-info',
    //         { typ: 'limits', data: limits },
    //         { headers: { Authorization: "Bearer " + token } }
    //     )
    //     console.log(res);
    // }, [limits]);

    useEffect(async () => {
        // sync wallets
        const res = await axios.post(
            '/users/user-info',
            { typ: 'wallets', data: wallets },
            { headers: { Authorization: "Bearer " + token } }
        )
        console.log(res);
    }, [wallets]);

    // useEffect(async () => {
    //     // sync debits
    //     const res = await axios.post(
    //         '/users/user-info',
    //         { typ: 'debits', data: debits },
    //         { headers: { Authorization: "Bearer " + token } }
    //     )
    //     console.log(res);
    // }, [debits]);

    // useEffect(async () => {
    //     // sync categories
    //     const res = await axios.post(
    //         '/users/user-info',
    //         { typ: 'categories', data: categories },
    //         { headers: { Authorization: "Bearer " + token } }
    //     )
    //     console.log(res);
    // }, [categories]);

    return (
        <DataContext.Provider
            value={{
                username,
                setUsername,
                profile,
                setProfile,
                settings,
                setSettings,
                limits,
                setLimits,
                wallets,
                setWallets,
                debits,
                setDebits,
                categories,
                setCategories,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;

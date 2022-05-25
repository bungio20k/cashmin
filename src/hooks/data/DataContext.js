import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../login-signup/AuthContext";

const DataContext = createContext({});

const fetch = async (token) => {
  try {
    const res = await axios.get("/all-data", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    // console.log("Got all data");
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const DataProvider = ({ children }) => {
  const [profile, changeProfile] = useState({});
  const [settings, changeSettings] = useState({});
  const [limits, changeLimits] = useState([]);
  const [wallets, changeWallets] = useState([]);
  const [debits, changeDebits] = useState([]);
  const [categories, changeCategories] = useState([]);

  const { token } = useContext(AuthContext);

  useEffect(async () => {
    if (token != null) {
      const newData = await fetch(token);
      changeProfile(
        newData.profile || { fullName: "", phoneNumber: "", birthday: "" }
      );
      changeSettings(newData.settings);
      changeLimits(newData.limits);
      changeWallets(newData.wallets);
      changeDebits(newData.debits);
      changeCategories(newData.categories);
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        profile,
        setProfile: (value) => changeProfile(value),
        settings,
        setSettings: (value) => changeSettings(value),
        limits,
        setLimits: (value) => changeLimits(value),
        wallets,
        setWallets: (value) => changeWallets(value),
        debits,
        setDebits: (value) => changeDebits(value),
        categories,
        setCategories: (value) => changeCategories(value),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

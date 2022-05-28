import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../login-signup/AuthContext";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [profile, changeProfile] = useState({});
  const [settings, changeSettings] = useState({});
  const [limits, changeLimits] = useState([]);
  const [wallets, changeWallets] = useState([]);
  const [debits, changeDebits] = useState([]);
  const [categories, changeCategories] = useState([]);
  const [username, setUsername] = useState("");

  const { setAuth, token } = useContext(AuthContext);

  const fetch = async () => {
    try {
      const res = await axios.get("/users/user-info", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      // console.log("Got all data");
      // console.log(res.data);
      return res.data;
    } catch (err) {
      // outdated token
      if (err.response.status == 403) setAuth(false);
    }
  };

  useEffect(async () => {
    if (token != null) {
      const newData = await fetch().catch((err) => console.log(err));
      changeProfile(
        newData?.profile || { fullName: "", phoneNumber: "", birthday: "" }
      );
      changeSettings(newData.settings);
      changeLimits(newData.limits);
      changeWallets(newData.wallets);
      changeDebits(newData.debits);
      changeCategories(newData.categories);
      setUsername(newData.username);
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        username,
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

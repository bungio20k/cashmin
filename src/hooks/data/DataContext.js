import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import AuthContext from '../login-signup/AuthContext';

const DataContext = createContext({});

const fetch = async (token) => {
    return axios.get('/users/user-info', {
        headers: {
            Authorization: 'Bearer ' + await token
        }
    }).then((res) => {
        return res.data;
    })
        .catch(err => console.log(err));
}

export const DataProvider = ({ children }) => {
    const [data, changeData] = useState({});
    const { token } = useContext(AuthContext);

    useEffect(() => {
        changeData(fetch(token));
    }, [token])

    const setData = (d) => changeData(d);
    return (
        <DataContext.Provider
            value={{
                data,
                setData
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext

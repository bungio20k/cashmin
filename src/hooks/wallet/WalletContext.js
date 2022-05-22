import axios from 'axios';
import { createContext, useState } from 'react';

const WalletContext = createContext({});

const fetch = async () => {
    return await axios.get('/wallets/all');
}

export const WalletProvider = ({ children }) => {
    const [wallets, changeWallets] = useState([]);
    const setWallets = (ws) => changeWallets(ws);
    return (
        <WalletContext.Provider
            value={{
                wallets,
                setWallets
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export default WalletContext
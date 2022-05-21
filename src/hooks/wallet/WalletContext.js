import { createContext, useState } from 'react';

const WalletContext = createContext({});

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
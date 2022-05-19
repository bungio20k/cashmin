import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { 
    Fab,
} from 'native-base';
import AddModal from "src/components/wallet/AddWalletModal";
import ModifyWalletModal from "src/components/wallet/ModifyWalletModal";

import { AntDesign } from '@expo/vector-icons'; 
import style from 'src/styles/wallet/AddRemoveWallet';

const data = [
    {
        key: '1',
        name: 'Ví chính',
        balance: '999.999.999đ',
        category: 'Chung',
        desc: 'Thẻ BIDV'
    },
    {
        key: '2',
        name: 'Ví phụ 1',
        balance: '999.999.999đ',
        category: 'Học phí',
        desc: 'Thẻ BIDV'
    },
    {
        key: '3',
        name: 'Ví phụ 2',
        balance: '999.999.999đ',
        category: 'Internet',
        desc: 'Thẻ BIDV'
    },
]

const AddWalletScreen = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [currentWallet, setCurrentWallet] = useState();

    return (
        <ScrollView style={style.container}>
            {data.map(wallet => (
                <TouchableOpacity style={style.card} key={wallet.key}
                    onPress={() => {
                        setCurrentWallet(wallet);
                        setShowModal2(true);
                    }}>
                    <Text style={style.name}>{wallet.name}</Text>
                    <Text style={style.balance}>Số dư: {wallet.balance}</Text>
                    <Text style={style.category}>Hạng mục: {wallet.category}</Text>
                    <Text style={style.desc}>Mô tả: {wallet.desc}</Text>
                </TouchableOpacity>
            ))}
            <AddModal showModal={showModal1} setShowModal={setShowModal1}/>
            <ModifyWalletModal showModal={showModal2} setShowModal={setShowModal2} currentWallet={currentWallet}/>
            <Fab 
                position="absolute" 
                size="sm" 
                bgColor="#4FB286"
                onPress={() => setShowModal1(true)}
                marginBottom={12}
                icon={<AntDesign name="pluscircleo" size={24} color="white" />}
            />
        </ScrollView>
    );
};

export default AddWalletScreen;

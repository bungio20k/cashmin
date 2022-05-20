import { ScrollView, Text, TouchableOpacity, View, Button } from "react-native";
import React, { useState } from "react";
import {
    Fab,
} from 'native-base';
import AddDebitModal from "src/components/wallet/AddDebitModal";
import ModifyDebitModal from "src/components/wallet/ModifyDebitModal";

import { AntDesign } from '@expo/vector-icons';
import style from '../../../styles/wallet/AddRemoveDebit';
import DebitLongPress from "../../../components/wallet/DebitLongPress";

const data = [
    {
        key: '1',
        name: 'Nợ 1',
        amount: '20.000đ',
        debt: true, // phân biệt giữa khoản nợ và khoản cho nợ
        category: 'Chung',
        desc: 'Nợ anh A',
        periodic: null, // định kỳ
    },
    {
        key: '2',
        name: 'Cho nợ 2',
        amount: '20.000đ',
        debt: false,
        category: 'Ăn uống',
        desc: 'Anh A mượn',
        periodic: null,
    },
    {
        key: '3',
        name: 'Tiền mạng hàng tháng',
        amount: '100.000đ',
        debt: true,
        category: 'Internet',
        desc: 'Tiền mạng',
        periodic: {
            start: '2022-05-19T07:33:54.962Z',
            period: 'Hàng tháng',
        },
    },
]

const AddDebitScreen = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [hold, setHold] = useState(false);
    const [currentDebit, setCurrentDebit] = useState();

    return (
        <>
            <ScrollView style={style.container}>
                {data.map(debit => (
                    <TouchableOpacity style={style.card} key={debit.key}
                        onPress={() => {
                            setCurrentDebit(debit);
                            setShowModal2(true);
                        }}
                        onLongPress={() => {
                            setCurrentDebit(debit);
                            setHold(true);
                        }}
                        delayLongPress={100}
                    >
                        <Text style={style.name}>{debit.name}</Text>
                        <Text style={style.balance}>Số tiền: {debit.amount}</Text>
                        <Text style={style.category}>Hạng mục: {debit.category}</Text>
                        <Text style={style.desc}>Mô tả: {debit.desc}</Text>
                        {debit.periodic && <Text style={style.desc}>Định kỳ: {debit.periodic.period}</Text>}
                        <Button title="Thanh toán" />
                    </TouchableOpacity>
                ))}
                <AddDebitModal showModal={showModal1} setShowModal={setShowModal1} />
                <ModifyDebitModal showModal={showModal2} setShowModal={setShowModal2} currentDebit={currentDebit} />
                <DebitLongPress hold={hold} setHold={setHold} currentDebit={currentDebit} setShowModal2={setShowModal2}/>
                <Fab
                    position="absolute"
                    size="sm"
                    bgColor="#4FB286"
                    onPress={() => setShowModal1(true)}
                    marginBottom={12}
                    icon={<AntDesign name="pluscircleo" size={24} color="white" />}
                />
            </ScrollView>
        </>
    );
};

export default AddDebitScreen;

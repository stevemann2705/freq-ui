import React, {useEffect, useState} from 'react';
import HomeUI from "../../layouts/home";
import getBalance from "../home/useForm";

const HomeContainer = () => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        getBalance().then((res) => {
            setBalance(res.data.total);
        });
    }, []);
    return (
        <>
            {balance && <HomeUI state={balance}/>}
        </>
    );
};

export default HomeContainer;

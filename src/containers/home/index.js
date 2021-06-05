import React, {useEffect, useState} from 'react';
import CurrentBalanceUI from "../../layouts/home/currentBalance";
import TotalProfitUI from "../../layouts/home/totalProfit";
import WonLostUI from "../../layouts/home/wonLostTrades";
import BestPairUI from "../../layouts/home/bestPair";
import HeaderMenu from "../../components/header";
import api from "../../helpers/api";
import {Grid} from "semantic-ui-react";

const HomeContainer = () => {
    const [balance, setBalance] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [wonLost, setWonLost] = useState("");
    const [bestPairData, setBestPairData] = useState("");
    useEffect(() => {
        api.balance().then((res) => {
            setBalance(res.data.total);
        });
        api.profit().then((res) => {
            setTotalProfit(res.data["profit_closed_fiat"]);
            console.log("WON/LOST", res.data["winning_trades"] + "/" + res.data["losing_trades"]);
            setWonLost(res.data["winning_trades"] + "/" + res.data["losing_trades"])
            setBestPairData({bestPair: res.data["best_pair"] , bestPairPercent: res.data["best_rate"]});
        });
    }, []);
    return (
        <>
            <HeaderMenu/>
            <Grid centered>
                <Grid.Row centered columns={5}>
                    <Grid.Column>
                        {balance && <CurrentBalanceUI state={balance}/>}
                    </Grid.Column>
                    <Grid.Column>
                        {totalProfit && <TotalProfitUI state={totalProfit}/>}
                    </Grid.Column>
                    <Grid.Column>
                        {wonLost && <WonLostUI state={wonLost}/>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={5}>
                    <Grid.Column>
                        {bestPairData && <BestPairUI state = {bestPairData}/>}
                    </Grid.Column>
                    <Grid.Column>
                        {totalProfit && <TotalProfitUI state={totalProfit}/>}
                    </Grid.Column>
                    <Grid.Column>
                        {wonLost && <WonLostUI state={wonLost}/>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default HomeContainer;

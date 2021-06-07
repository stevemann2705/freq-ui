import React, {useEffect, useState} from 'react';
import CurrentBalanceUI from "../../layouts/home/currentBalance";
import TotalProfitUI from "../../layouts/home/totalProfit";
import WonLostUI from "../../layouts/home/wonLostTrades";
import BestPairUI from "../../layouts/home/bestPair";
import LastTradeUI from "../../layouts/home/lastTradeTime";
import OpenTotalUI from "../../layouts/home/openTotalTrades";
import PlotUI from "../../layouts/home/plot";
import HeaderMenu from "../../components/header";
import api from "../../helpers/api";
import {Grid, Input} from "semantic-ui-react";

const HomeContainer = () => {
    const [balance, setBalance] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [wonLost, setWonLost] = useState("");
    const [bestPairData, setBestPairData] = useState("");
    const [lastTrade, setLastTrade] = useState("");
    const [openTotal, setOpenTotal] = useState("");
    const [daily, setDaily] = useState([]);
    const [days, setDays] = useState(7);
    useEffect(() => {
        api.balance().then((res) => {
            setBalance(res.data.total);
        });
        api.profit().then((res) => {
            setTotalProfit(res.data["profit_closed_fiat"]);
            console.log("WON/LOST", res.data["winning_trades"] + "/" + res.data["losing_trades"]);
            setWonLost(res.data["winning_trades"] + "/" + res.data["losing_trades"])
            setBestPairData({bestPair: res.data["best_pair"], bestPairPercent: res.data["best_rate"]});
            setLastTrade(res.data["latest_trade_date"]);
            setOpenTotal(res.data["trade_count"] - res.data["closed_trade_count"] + "/" + res.data["trade_count"])
        });
        api.daily(days).then((res) => {
            const dailyData = res.data["data"].map(data => ({
                abs_profit: data["abs_profit"],
                date: data["date"],
                fiat_value: data["fiat_value"],
                trade_count: data["trade_count"]
            }));
            setDaily(dailyData);
        });
    }, [days]);
    return (
        <>
            <HeaderMenu/>
            <Grid stackable>
                <Grid.Row columns={3}>
                    <Grid.Column placeholder={"text"} className={"centered-flexed"}>
                        {balance && <CurrentBalanceUI state={balance}/>}
                    </Grid.Column>
                    <Grid.Column placeholder={"text"} className={"centered-flexed"}>
                        {totalProfit && <TotalProfitUI state={totalProfit}/>}
                    </Grid.Column>
                    <Grid.Column placeholder={"text"} className={"centered-flexed"}>
                        {wonLost && <WonLostUI state={wonLost}/>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column className={"centered-flexed"}>
                        {bestPairData && <BestPairUI state={bestPairData}/>}
                    </Grid.Column>
                    <Grid.Column className={"centered-flexed"}>
                        {lastTrade && <LastTradeUI state={lastTrade}/>}
                    </Grid.Column>
                    <Grid.Column className={"centered-flexed"}>
                        {openTotal && <OpenTotalUI state={openTotal}/>}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {daily && <PlotUI state={daily}/>}
                </Grid.Row>
                <Grid.Row>
                    <Input type="number"
                           label={"Days"}
                           value={days}
                           onChange={event => event.target.value && setDays(parseInt(event.target.value))}/>
                </Grid.Row>
            </Grid>
        </>
    );
};

export default HomeContainer;

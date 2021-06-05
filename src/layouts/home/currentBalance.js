import {Header, Segment} from "semantic-ui-react";
import React from "react";
import {quantityFormat} from "../../utils/quantityFormat";
import {getColor} from "../../utils/getColor";

const square = {width: 200, height: 200}
const initialAmount = process.env.REACT_APP_INITIAL_AMOUNT;

const CurrentBalanceUI = (props) => {
    const currentBalance = quantityFormat(props?.state);
    return (
        <div style={{paddingTop: '10px', paddingLeft: '30px'}}>
            <Segment circular style={square}>
                <Header as='h2' color={getColor(props?.state, initialAmount)}>
                    Current Balance
                    <Header.Subheader color={getColor(currentBalance, initialAmount)}>{"$" + currentBalance + "/$" + initialAmount}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default CurrentBalanceUI;

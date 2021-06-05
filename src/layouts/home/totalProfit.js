import {Header, Segment} from "semantic-ui-react";
import React from "react";
import {quantityFormat} from "../../utils/quantityFormat";
import {getColor} from "../../utils/getColor";

const square = {width: 200, height: 200}

const CurrentBalanceUI = (props) => {
    const totalProfit = quantityFormat(props?.state);
    return (
        <div style={{paddingTop: '10px', paddingLeft: '30px', paddingRight: '30px'}}>
            <Segment circular style={square}>
                <Header as='h2' color={getColor(totalProfit, 0)}>
                    Total Profit
                    <Header.Subheader>{"$" + totalProfit}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default CurrentBalanceUI;

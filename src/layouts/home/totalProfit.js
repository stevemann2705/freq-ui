import HeaderMenu from "../../components/header";
import {Header, Segment} from "semantic-ui-react";
import React from "react";
import {quantityFormat} from "../../utils/quantityFormat";

const square = {width: 200, height: 200}

const CurrentBalanceUI = (props) => {
    return (
        <div style={{paddingTop: '10px', paddingLeft: '30px', paddingRight: '30px'}}>
            <Segment circular style={square}>
                <Header as='h2'>
                    Total Profit
                    <Header.Subheader>{"$" + quantityFormat(props?.state)}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default CurrentBalanceUI;

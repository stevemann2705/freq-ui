import {Header, Segment} from "semantic-ui-react";
import React from "react";

const square = {width: 200, height: 200}

const LastTradeTimeUI = (props) => {
    console.log("props", props);
    return (
        <div style={{paddingTop: '10px'}}>
            <Segment circular style={square}>
                <Header as='h2'>
                    Last Trade
                    <Header.Subheader>{props?.state}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default LastTradeTimeUI;

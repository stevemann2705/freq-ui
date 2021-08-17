import {Header, Segment} from "semantic-ui-react";
import React from "react";

const square = {width: 200, height: 200}

const OpenTotalUI = (props) => {
    return (
        <div style={{paddingTop: '10px'}}>
            <Segment circular style={square} loading={props?.state == null}>
                <Header as='h2'>
                    Open/Total
                    <Header.Subheader>{props?.state}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default OpenTotalUI;

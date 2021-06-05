import {Header, Segment} from "semantic-ui-react";
import React from "react";

const square = {width: 200, height: 200}

const WonLostUI = (props) => {
    return (
        <div style={{paddingTop: '10px', paddingLeft: '30px', paddingRight: '30px'}}>
            <Segment circular style={square}>
                <Header as='h2'>
                    Won/Lost
                    <Header.Subheader>{props?.state}</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default WonLostUI;

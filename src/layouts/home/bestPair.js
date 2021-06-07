import {Header, Segment} from "semantic-ui-react";
import React from "react";

const square = {width: 200, height: 200}

const BestPairUI = (props) => {
    console.log("props", props);
    return (
        <div style={{paddingTop: '10px'}}>
            <Segment circular style={square}>
                <Header as='h2'>
                    Best Pair
                    <Header.Subheader>{props?.state.bestPair}</Header.Subheader>
                    <Header.Subheader>{props?.state.bestPairPercent}%</Header.Subheader>
                </Header>
            </Segment>
        </div>
    );
};

export default BestPairUI;

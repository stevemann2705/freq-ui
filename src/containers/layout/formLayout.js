import React, { Component } from "react";
import {Container, Divider, Form, Header, Icon, Segment} from "semantic-ui-react";

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="ui one column stackable center aligned page grid padded">
                    <div className="column twelve wide">
                        <Container>
                            <Header as='h1' icon textAlign='center'>
                                <Icon name='sign in' circular />
                                <Header.Content>Freq UI v0.0.1</Header.Content>
                            </Header>
                            <Divider section />
                            <Segment>
                                <Header>
                                    {this.props.header}
                                </Header>
                                <Form.Group size="large" align="left">
                                    {this.props.children}
                                </Form.Group>
                            </Segment>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout

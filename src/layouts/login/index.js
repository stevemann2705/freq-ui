import React from 'react';
import {Button, Form, Icon, Segment} from "semantic-ui-react";
import Layout from "../../containers/layout/formLayout";
import HeaderMenu from "../../components/header";

const LoginUI = ({form: {onChange, form, formInvalid, onSubmit }}) => {
    return (
        <div>
            <HeaderMenu />
            <Layout header="Login">
                <Form>
                    <Form.Field>
                        <Form.Input value={form.username || ""} onChange={onChange} name='username' placeholder='Username' label='Username' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input value={form.password || ""} onChange={onChange} name='password' type='password' placeholder='Password' label='Password' />
                    </Form.Field>
                    <Segment basic textAlign={"center"}>
                        <Button onClick={() => onSubmit(form) } disabled={formInvalid} style={{textAlign: "center"}} type='submit' color='blue' animated fluid>
                            <Button.Content visible>Submit</Button.Content>
                            <Button.Content hidden>
                                <Icon name='sign in'/>
                            </Button.Content>
                        </Button>
                    </Segment>
                </Form>
            </Layout>
        </div>
    );
};

export default LoginUI;

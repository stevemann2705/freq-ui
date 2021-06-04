import React from 'react';
import {Button, Icon, Menu} from "semantic-ui-react";
import {Link, useLocation} from 'react-router-dom'

const HeaderMenu = () => {
    const { pathname } = useLocation();
    return (
        <Menu secondary pointing>
            <Menu.Item as={Link} to="/" style={ { fontSize: 20} }>Freqtrade UI v0.0.1</Menu.Item>
            <Menu.Item position="right">
                {!(pathname === "/auth/login") && localStorage.getItem("loggedIn") === "false" && <Button as={Link} to="/auth/login" animated color='blue'>
                    <Button.Content visible>Log in</Button.Content>
                    <Button.Content hidden>
                        <Icon name='sign in'/>
                    </Button.Content>
                </Button>}
            </Menu.Item>
            <Menu.Item>
                {localStorage.getItem("loggedIn") === "true" && <Button onClick={() => {
                    localStorage.setItem("loggedIn", "false");
                    localStorage.removeItem("access_token");
                    localStorage.removeItem("refresh_token");
                }} as={Link} to="/" animated color='red'>
                    <Button.Content visible>Log Out</Button.Content>
                    <Button.Content hidden>
                        <Icon name='sign out'/>
                    </Button.Content>
                </Button>}
            </Menu.Item>
        </Menu>
    );
}

export default HeaderMenu;

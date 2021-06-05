import React from 'react';
import HeaderMenu from "../../components/header";
import {Button} from "semantic-ui-react";
import api from "../../helpers/api";

const HomeContainer = () => {
    return (
        <div>
            <HeaderMenu />
            <Button onClick={() => api.balance()} centered>
                Ping
            </Button>
        </div>
    );
};

export default HomeContainer;

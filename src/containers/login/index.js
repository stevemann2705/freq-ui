import LoginUI from "../../layouts/login";
import useForm from "./useForm";
import {useEffect} from "react";

const LoginContainer = () => {
    if(localStorage["access_token"]){
        window.location = "/";
    }
    useEffect(() => {}, [])
    return <LoginUI form={useForm()}/>;
}

export default LoginContainer;

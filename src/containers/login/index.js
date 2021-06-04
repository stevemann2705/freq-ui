import LoginUI from "../../layouts/login";
import useForm from "./useForm";
import {useEffect} from "react";

const LoginContainer = () => {
    useEffect(() => {}, [])
    return <LoginUI form={useForm()}/>;
}

export default LoginContainer;

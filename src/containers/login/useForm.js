import {useState} from "react";
import { useHistory } from "react-router-dom";
import api from "../../helpers/api";

const useForm = () => {
    const history = useHistory();

    const [form, setForm] = useState({});
    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value});
    };

    const formInvalid =
        !form.username?.length ||
        !form.password?.length;

    const onSubmit = () => {
        let key = form.username + ":" + form.password;
        let token = btoa(key);
        const options = {
            headers: {"Authorization": `Basic ${token}`}
        };
        api.login(options)
            .then((res) => {
                localStorage.setItem("access_token", res.data["access_token"]);
                localStorage.setItem("refresh_token", res.data["refresh_token"]);
                localStorage.setItem("loggedIn", "true");
                history.push("/");
            })
            .catch((err) => {
                localStorage.setItem("loggedIn", "false");
                console.log("err", err);
            });
    };

    return {form, onChange, formInvalid, onSubmit};
};

export default useForm;


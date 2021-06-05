import createAxios from "../../../helpers/axios";

export const login = () => {
    return createAxios.post("/token/login")
};

import createAxois from "../../../helpers/axios";

export const login = () => {
    return createAxois.post("/token/login")
};

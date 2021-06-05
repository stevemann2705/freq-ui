import createAxios from "./axios";

const api = {
    login: (options) => {
        return createAxios(options).post("/token/login");
    },
    ping: () => {
        return createAxios().get("/ping");
    },
    balance: () => {
        return createAxios().get("/balance");
    },
    profit: () => {
        return createAxios().get("/profit")
    }
};
export default api;

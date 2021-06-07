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
    },
    daily: (days) => {
        if (days) {
            return createAxios().get("/daily?timescale=" + days);
        } else {
            return createAxios().get("/daily");
        }
    }
};
export default api;

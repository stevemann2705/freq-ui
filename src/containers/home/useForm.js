import api from "../../helpers/api";

const getBalance = () => {
     return api.balance();
    // console.log("balance", balance);
    // return {balance};
};

export default getBalance;

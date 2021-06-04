import LoginContainer from "../containers/login"
import TradeComponent from "../containers/trade"
import DashboardComponent from "../containers/dashboard"
import HomeComponent from "../containers/home"

const routes = [
     {
         path:'/auth/login',
         component:LoginContainer,
         title:'Login'
     },
     {
         path:'/trade',
         component:TradeComponent,
         title:'Trades'
     },
     {
         path:'/dashboard',
         component:DashboardComponent,
         title:'Dashboard'
     },
     {
         path:'/',
         component: HomeComponent,
         title:'Home'
     }
 ]

export default routes;

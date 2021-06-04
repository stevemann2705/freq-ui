import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from "./routes";

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact
                        render={(props) => <route.component {...props}/>}
                    />))
                }
            </Switch>
        </Router>
    );
}

export default App;

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import empty from "./empty";
import Login from "./login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/empty" component={empty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

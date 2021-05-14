import Homepage from "./Pages/Homepage/Homepage.page";
import Hats from "./Pages/Hats/Hats.page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/hats" exact component={Hats} />
      </Switch>
    </Router>
  );
}

export default App;

import Homepage from "./Pages/Homepage/Homepage.page";
import Hats from "./Pages/Hats/Hats.page";
import Shop from "./Pages/Shop/Shop.page";
import Header from "./Components/header/header.component";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/hats" exact component={Hats} />
      </Switch>
    </Router>
  );
}

export default App;

import Homepage from "./Pages/Homepage/Homepage.page";
import Hats from "./Pages/Hats/Hats.page";
import Shop from "./Pages/Shop/Shop.page";
import Header from "./Components/header/header.component";
import SignIn_SignUp from "./Pages/SignIn_SignUp/sign-in-and-sign-up.page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utilities";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/hats" exact component={Hats} />
          <Route path="/signin" exact component={SignIn_SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;

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

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />
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

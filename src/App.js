import Homepage from "./Pages/Homepage/Homepage.page";
import Hats from "./Pages/Hats/Hats.page";
import Shop from "./Pages/Shop/Shop.page";
import Header from "./Components/header/header.component";
import SignIn_SignUp from "./Pages/SignIn_SignUp/sign-in-and-sign-up.page";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilities";
import { connect } from "react-redux";
import { SetCurrentUser } from "./Redux/Actions/User_Actions/userAction";
import React from "react";
import CartPage from "./Pages/Cart/cart.page";
import { selectCurrentUser } from "./Redux/Reducers/User/user.selector";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { SetCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      SetCurrentUser(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/hats" exact component={Hats} />
          <Route path="/cart" exact component={CartPage} />
          <Route
            path="/signin"
            exact
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn_SignUp />
            }
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: selectCurrentUser(state) };
};

const mapDispatchToProps = (dispatch) => ({
  SetCurrentUser: (user) => dispatch(SetCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import  Main  from "./Pages/Main/Main";
import  Details  from "./Pages/Details/Details";
import  Login  from "./Pages/Login/Login";
import  Signup  from "./Pages/Signup/Signup";
import  Social from "./Pages/Social/Social";
import  List  from "./Pages/List/List";
import  Cart  from "./Pages/Cart/Cart";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";


class Routes extends React.Component{
  render() {
    return(
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/details" component={Details} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/list" component={List} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
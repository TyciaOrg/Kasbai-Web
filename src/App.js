import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers/history";
import "./css/index.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import KasbaiLandingPage from "./KasbaiLandingPage/KasbaiLandingPage";
import VolunteerForms from "./Admin/VolunteerForms/VolunteerForms";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <div>
              <Header />
              <Switch>
                <Route
                  exact
                  path="/admin/volunteer-forms"
                  component={VolunteerForms}
                />
                <Route exact path="/" component={KasbaiLandingPage} />
              </Switch>
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

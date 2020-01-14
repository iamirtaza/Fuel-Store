import React from "react";
import {connect} from "react-redux"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import TalentProfile from "../Pages/TalentProfile";
import AllTalent from "../Pages/AllTalent"
import Login from "../Pages/Login";
import SideBar from "../Components/SideBar";
class AppRoutes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
         <Route exact path="/" component={Login} />
         <Route exact path="/talentProfile/:id" component={TalentProfile} />
         <Route exact path="/allTalents" component={AllTalent} />
        <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    );
  }
}

const mapStatToProps = state => ({
  user: state.user.auth
});
export default connect(mapStatToProps, {  })(AppRoutes);

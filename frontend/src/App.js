import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserList from "./components/UserList";
import TeamList from "./components/teams/TeamList";
import Meeting from "./components/Meeting";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div
      style={{ marginLeft: "300px", marginTop: "50px", marginRight: "50px" }}
    >
      <Router>
        <div>
          <div
            className="ui sidebar inverted left visible vertical menu"
            style={{ width: "200px", textAlign: "center", paddingTop: "30px" }}
          >
            <Link
              to="/"
              className="ui inverted button"
              style={{ width: "150px", marginTop: "10px" }}
            >
              <i className="home icon" />
              Home
            </Link>
            <Link
              to="/users"
              className="ui inverted button"
              style={{ width: "150px", marginTop: "10px" }}
            >
              <i className="user icon" />
              Users
            </Link>
            <Link
              to="/teams"
              className="ui inverted button"
              style={{ width: "150px", marginTop: "10px" }}
            >
              <i className="users icon" />
              Teams
            </Link>
            <Link
              to="/meetings"
              className="ui inverted button"
              style={{ width: "150px", marginTop: "10px" }}
            >
              <i className="users icon" />
              Meetings
            </Link>
          </div>
          <Switch>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/teams">
              <TeamList />
            </Route>
            <Route path="/meetings">
              <Meeting />
            </Route>
          </Switch>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

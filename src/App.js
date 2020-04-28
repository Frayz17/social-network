import React from "react";
import "./App.css";
import { HeaderContainer } from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import { ProfileContainer } from "./components/Profile";
import { UsersContainer } from "components/Users";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;

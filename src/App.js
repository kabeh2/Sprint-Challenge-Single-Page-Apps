import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import EpisodeList from "./components/EpisodeList.js";
import LocationList from "./components/LocationsList.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Switch>
        <Route
          exact
          path="/characters/:id?"
          render={props => {
            return <CharacterList {...props} />;
          }}
        />
        <Route
          path="/characters"
          render={() => {
            return <CharacterList />;
          }}
        />
        <Route
          exact
          path="/locations"
          render={() => {
            return <LocationList />;
          }}
        />
        <Route
          exact
          path="/episodes"
          render={() => {
            return <EpisodeList />;
          }}
        />
        <Route exact path="/home" component={WelcomePage} />
        <Redirect to="/home" />
      </Switch>
    </main>
  );
}

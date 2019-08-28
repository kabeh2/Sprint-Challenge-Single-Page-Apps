import React from "react";
import { Route, Switch } from "react-router-dom";
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
          path="/characters"
          render={() => {
            return <CharacterList />;
          }}
        />
        <Route
          path="/locations"
          render={() => {
            return <LocationList />;
          }}
        />
        <Route
          path="/episodes"
          render={() => {
            return <EpisodeList />;
          }}
        />
        <Route exact path="/home" component={WelcomePage} />
      </Switch>
    </main>
  );
}

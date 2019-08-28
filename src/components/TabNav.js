import React from "react";
import { NavLink } from "react-router-dom";
import { Tab, Menu, Icon } from "semantic-ui-react";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs
// https://react.semantic-ui.com/modules/tab/

const Nav = props => <NavLink exact {...props} />;

const createLabel = (iconName, labelText) => (
  <span>
    <Icon name={iconName} />
    {labelText}
  </span>
);

const welcomeLabel = createLabel("home", "Home Page");
const characterLabel = createLabel("users", "Characters");
const locationsLabel = createLabel("users", "Locations");
const episodesLabel = createLabel("users", "Episodes");

const panes = [
  {
    menuItem: (
      <Menu.Item
        key="home"
        as={Nav}
        to={`/home`}
        // put active false only on this as default had home as true
        // for whatever strange reason
        active={false}
        content={welcomeLabel}
      />
    )
    // pane: { key: "home", content: <WelcomePage />, size: "massive" }
  },
  {
    menuItem: (
      <Menu.Item
        key="characters"
        as={Nav}
        to={`/characters`}
        content={characterLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="locations"
        as={Nav}
        to={`/locations`}
        content={locationsLabel}
      />
    )
  },
  {
    menuItem: (
      <Menu.Item
        key="episodes"
        as={Nav}
        to={`/episodes`}
        content={episodesLabel}
      />
    )
  }
];

const TabNav = () => {
  return <Tab panes={panes} renderActiveOnly={false} />;
};

export default TabNav;

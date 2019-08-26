// import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

// // TODO: Add missing tabs below
// // Take a look at React Semantic UI tabs
// // https://react.semantic-ui.com/modules/tab/
// export default function TabNav() {

// };

import React from "react";
import { List, Tab } from "semantic-ui-react";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";

const panes = [
  {
    menuItem: "Home",
    pane: { key: "home", content: <WelcomePage />, size: "massive" }
  },
  {
    menuItem: "Characters",
    pane: {
      key: "characters",
      content: <CharacterList />,
      textAlign: "center"
    }
  },
  {
    menuItem: "Locations",
    pane: {
      key: "locations",
      content: <LocationList />
    }
  },
  {
    menuItem: "Episodes",
    pane: (
      <Tab.Pane key="episodes">
        <p>This tab has a complex content</p>

        <List>
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
      </Tab.Pane>
    )
  }
];

const TabExampleContentShorthand = () => (
  <Tab panes={panes} renderActiveOnly={false} />
);

export default TabExampleContentShorthand;

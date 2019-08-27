import React from "react";
import { Icon, List } from "semantic-ui-react";

const EpisodeCard = props => (
  <List>
    <List.Item>
      <Icon name="right triangle" />
      <List.Content>
        <List.Header>{`${props.episode} - ${props.name}`}</List.Header>
        <List.Description>{props.air_date}</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

export default EpisodeCard;

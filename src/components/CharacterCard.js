import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const CharacterCard = ({
  image,
  name,
  species,
  status,
  location,
  origin,
  gender
}) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{`${species} ${status}`}</Card.Meta>
      <Card.Description>{`Location: ${location.name}`}</Card.Description>
      <Card.Description>{`Origin: ${origin.name}`}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      {`Gender: ${gender}`}
    </Card.Content>
  </Card>
);

export default CharacterCard;

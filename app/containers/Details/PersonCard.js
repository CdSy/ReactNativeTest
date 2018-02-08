import React from 'react';
import { observer } from 'mobx-react';
import { Card, CardItem, Body, Text, Button } from 'native-base';

const PersonCard = observer((props) => {
  return (
    <Card>
      <CardItem>
        <Body>
          <Text>
            {props.name}
          </Text>
          <Text>
            {props.age}
          </Text>
        </Body>
        <Button onPress={props.onPress} style={{width: 100, flex: 1, justifyContent: 'center'}}>
          <Text>Edit</Text>
        </Button>
      </CardItem>
    </Card>
  )
});

export default PersonCard;

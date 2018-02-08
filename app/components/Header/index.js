import React from 'react';
import { Container, Header, Left, Right, Button, Text } from 'native-base';

const AppFooter = (props) => (
  <Container>
    <Header>
      <Left>
        <Button active onPress={props.toForm}>
          <Text>Добавить</Text>
        </Button>
      </Left>
      <Right>
        <Button onPress={props.toDetails}>
          <Text>Список</Text>
        </Button>
      </Right>
    </Header>
  </Container>
);
export default AppFooter;

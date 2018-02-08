import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Alert } from 'react-native';
import { Container, Content, Button, Form, Item, Text } from 'native-base';
import TextInput from '../../components/TextInput';

@inject('listStore')
@observer
class Home extends Component {
  onSubmit = () => {
    this.props.listStore.addItem();

    Alert.alert(
      'Alert',
      'Person was added',
      [],
      { cancelable: true }
    )
  }

  render() {
    const { list, form: { age, name } } = this.props.listStore;
    const changeInput = this.props.listStore.changeInput;

    return (
      <Container style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <Button onPress={() => this.props.navigation.navigate('Details')} block>
          <Text>List</Text>
        </Button>
        <Form style={{width: 300, flex: 1}}>
          <Item last>
            <TextInput placeholder="Username"
              value={name}
              onChangeText={(text) => changeInput({ name: 'name', value: text })} />
          </Item>
          <Item last>
            <TextInput placeholder="Age"
              value={age}
              onChangeText={(text) => changeInput({ name: 'age', value: text })} />
          </Item>
          <Button style={{ 
                    marginTop: 20, 
                    alignSelf: 'center',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onPress={this.onSubmit}>
            <Text>Add to list</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Home;

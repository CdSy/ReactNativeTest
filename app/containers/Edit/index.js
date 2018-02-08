import React, { Component } from 'react';
import { inject, observer } from  'mobx-react';
import { observable, action } from 'mobx';
import { Alert } from 'react-native';
import { Container, Content, Button, Form, Item, Text } from 'native-base';
import TextInput from '../../components/TextInput';

@inject('listStore')
@observer
class EditPerson extends Component {
  @observable state = {
    name: null,
    age: null,
    id: null
  };

  componentDidMount() {
    const { params: { person } } = this.props.navigation.state;
    const name = person ? person.name : '';
    const age = person ? person.age : '';
    const id = person ? person.id : null;

    const personData = {
      name,
      age,
      id
    };

    for (key in personData) {
      this.changeInput({
        name: key,
        value: personData[key]
      });
    }
  }

  @action.bound
  changeInput = ({name, value}) => {
    this.state[name] = value;
  }

  saveChange = () => {
    if (this.state.id === null) {
      console.log('edit person error');
      return;
    }

    this.props.listStore.editPerson(this.state);

    Alert.alert(
      'Alert',
      'Person success fully changed',
      [],
      { cancelable: true }
    )
  }

  render() {
    const name = this.state.name;
    const age = this.state.age;

    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <TextInput placeholder="First name"
                value={name}
                onChangeText={(text) => this.changeInput({ name: 'name', value: text })}
              />
            </Item>
            <Item>
              <TextInput placeholder="Age"
                value={age}
                onChangeText={(text) => this.changeInput({ name: 'age', value: text })}
              />
            </Item>
            <Button onPress={this.saveChange}>
              <Text>Save</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default EditPerson;

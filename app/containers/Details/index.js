import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Content } from 'native-base';
import PersonCard from './PersonCard';

@inject('listStore')
@observer
class Details extends Component {
  render() {
    const { list } = this.props.listStore;

    return (
      <Container>
        <Content>
          {list.map((person) => {
            return (
              <PersonCard key={person.id}
                          name={person.name}  
                          age={person.age}
                          onPress={() => this.props.navigation.navigate('Edit', {
                            person: person
                          })} />
            )
          })}
        </Content>
      </Container>
    );
  }
}

export default Details;

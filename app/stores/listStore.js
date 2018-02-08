import {observable, action} from 'mobx';

class ListStore {
  @observable list = [
    {
      name: "Andrew",
      age: 24,
      id: 1
    },
    {
      name: "Robert",
      age: 45,
      id: 2
    }
  ];

  @observable form = {
    name: "",
    age: ""
  }

  @action.bound
  changeInput = ({name, value}) => {
    this.form[name] = value;
  }

  @action.bound
  cleanFrom = () => {
    for (let key in this.form) {
      this.form[key] = "";
    } 
  }

  @action.bound 
  editPerson = (editedPerson) => {
    this.list.forEach((person) => {
      if (person.id === editedPerson.id) {
        for (let key in editedPerson) {
          person[key] = editedPerson[key];
        }
      } 
    });
  }

  @action.bound
  addItem = () => {
    this.list.push({
      name: this.form.name,
      age: this.form.age,
      id: this.list.length + 1
    });

    this.cleanFrom();
  }

  @action.bound
  removeItem = () => {

  }
}

export default ListStore;

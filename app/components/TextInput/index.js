import React from 'react';
import { observer } from 'mobx-react';
import { Item, Input } from 'native-base';
// import style from './style';

const TextInput = observer((props) => {
  return (
    <Input {...props} />
  );
});

export default TextInput;

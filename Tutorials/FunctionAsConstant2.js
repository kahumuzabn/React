import React from 'react';
import {Text, View } from 'react-native';

const Cat = (props) => {
  return (
<View>
<Text>Miriam with {props.name}</Text>
</View>
  );
}

const Cafe = () => {
  return(
    <View>
<Cat name="Male"/>
<Cat name="Tom"/>
<Cat name="Sam"/>
</View>
  );
}

export default Cafe;
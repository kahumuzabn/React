import React from 'react';
import {Text} from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}
const Cat2 = ( ) => {
 
  return (
    <Text>Hello</Text>
// <Text>Hello {getFullName("Ben", "Nakuti", "Anguin")}</Text>
  );
}
export default Cat2;
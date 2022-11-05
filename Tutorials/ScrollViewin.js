import React from 'react';
import { Image, ScrollView, Text } from 'react-native';

const logo = {
uri:'https://reactnative.dev/img/tiny_logo.png',
width: 64,
height: 64
};

const Scrow = () => (
  <ScrollView>
<Text style={{ fontSize:96 }}> Scroll me </Text>
<Image source={logo}/>
<Text style={{ fontSize:96 }}> Scroll me </Text>
<Image source={logo}/>
<Text style={{ fontSize:96 }}> Scroll me </Text>
<Image source={logo}/>
  </ScrollView>
);

export default Scrow;
import React, { useState } from "react";
import { Button, Text, View } from "react-native"

const Dog = (props) => {
  const [isHungry, setIsHungry] = useState (true);
  return (
    <View>
<Text>
I am {props.name}, and I am {isHungry ? "Hungry" : "full"}!
</Text>
<Button
onPress = {
  () =>{
    setIsHungry(false);
  }
}
disabled = {!isHungry}
title={isHungry ? "Pour me some milk, please!":"Thank you!"}
/>
    </View>
  );
}

const Stat = () => {
  return(
    <>
<Dog name="Mendy" />
<Dog name="Spoty" />
  </>
  );
}

export default Stat;
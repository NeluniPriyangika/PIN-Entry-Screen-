import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PinEntryScreen = () => {
  return(
    <View >
      <Text style={styles.title}>Enter Your PIN Code</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
  title: {
   marginLeft:40,
   fontSize:30,
   marginTop:30,
   fontFamily:'roboto',
   color:'gray',
  }
});

export default PinEntryScreen;
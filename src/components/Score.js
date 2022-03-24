import React from "react";
import { StyleSheet, Text } from "react-native";

const Score = ({star}) => {

  return (
    <Text style={styles.score}>
      {star}.0 <Text style={styles.scoreNum}>/ 5.0</Text>
    </Text>
  );  
};

const styles = StyleSheet.create({
  screenNum:{
    color: "#131313"
  }
})
export default Score;
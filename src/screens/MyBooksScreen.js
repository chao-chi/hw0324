import React from "react";
import { StyleSheet, Text } from "react-native";

const MyBooksScreen = ({ navigation }) => {
  return (
    <Text style={styles.mybookTitle}>My Books</Text>
  );
};

const styles = StyleSheet.create({
  mybookTitle: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold"
  }
})

export default MyBooksScreen;

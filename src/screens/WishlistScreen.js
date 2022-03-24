import React from "react";
import { StyleSheet, Text } from "react-native";

const WishlistScreen = ({ navigation }) => {
  return (
    <Text style={styles.mybookTitle}>Wishlist</Text>
  );
};

const styles = StyleSheet.create({
  mybookTitle: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold"
  }
})

export default WishlistScreen;

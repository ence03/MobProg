import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ type, onPress, text }) => {
  return (
    <Pressable
      style={[styles.container, styles[`container_${type}`]]}
      onPress={onPress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginVertical: 10,
  },

  container_PRIMARY: {
    backgroundColor: "#E55604",
    borderRadius: 5,
  },

  text_PRIMARY: {
    fontWeight: "bold",
    color: "#EBE4D1",
  },

  text_TERTIARY: {
    color: "#E55604",
  },
});

export default Button;

import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = ({ placeholder, value, setValue, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#00909E",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Input;

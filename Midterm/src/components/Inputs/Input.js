import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";

const Input = ({ placeholder, control, name, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onchange, onBlur } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            value={value}
            onChangeText={onchange}
            secureTextEntry={secureTextEntry}
          />
        )}
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

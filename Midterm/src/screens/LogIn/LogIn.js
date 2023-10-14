import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <Input placeholder="Username" value={username} setValue={setUsername} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <Button text="Log In" type="PRIMARY" />
      <Button
        text="Don't have an account? Resgister here."
        onPress={() => {
          navigation.navigate("Register");
        }}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#EBE4D1",
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#26577C",
  },
});

export default LogIn;

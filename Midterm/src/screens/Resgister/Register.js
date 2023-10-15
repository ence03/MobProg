import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [firstname, setFisrtname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <Input placeholder="Username" value={username} setValue={setUsername} />
      <Input
        placeholder="Firstname"
        value={firstname}
        setValue={setFisrtname}
      />
      <Input placeholder="Lastname" value={lastname} setValue={setLastname} />
      <Input placeholder="Email" value={email} setValue={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirm Password"
        value={confirmpassword}
        setValue={setConfirmpassword}
        secureTextEntry
      />

      <Button text="Register" type="PRIMARY" />
      <Button
        text="Already have an account? Log in here."
        onPress={() => {
          navigation.navigate("Log In");
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

import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/logo.png";

const LogIn = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
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
        text="Forgot Password?"
        type="TERTIARY"
        onPress={() => {
          navigation.navigate("Forgot Password");
        }}
      />
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
    flex: 1,
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

  logo: {
    width: "70%",
    maxWidth: 200,
    height: 100,
    marginVertical: 5,
  },
});

export default LogIn;

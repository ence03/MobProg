import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";

const LogIn = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const onBackToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Create an account</Text>

      <Input placeholder="Username" value={username} setValue={setUsername} />

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
        onPress={onBackToLogin}
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
    backgroundColor: "#DAE1E7",
    borderRadius: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "semi-bold",
    color: "#142850",
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    height: 100,
  },
});

export default LogIn;

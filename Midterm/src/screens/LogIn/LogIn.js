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
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const LogIn = () => {
  const { control, handleSubmit } = useForm();

  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate("");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };

  const onDontHaveAccountPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Log in your account</Text>

      <Input name="username" placeholder="Username" control={control} />
      <Input
        name="Password"
        placeholder="Password"
        control={control}
        secureTextEntry
      />

      <Button text="Log In" type="PRIMARY" onPress={onLoginPress} />
      <Button
        text="Forgot Password?"
        type="TERTIARY"
        onPress={onForgotPasswordPressed}
      />
      <Button
        text="Don't have an account? Resgister here."
        onPress={onDontHaveAccountPressed}
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

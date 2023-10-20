import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

const ResetConfirmation = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onResetPass = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <Text style={styles.text}>
        We have sent a four digit code on your phone/email
      </Text>
      <Input
        name="Four digit code"
        placeholder="Four digit code"
        control={control}
      />
      <Input
        name="New Password"
        placeholder="New password"
        control={control}
        secureTextEntry
      />
      <Input
        name="Confirm password"
        placeholder="Confirm password"
        control={control}
        secureTextEntry
      />
      <Button text="Reset Password" type="PRIMARY" onPress={onResetPass} />
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
    fontWeight: "bold",
    color: "#26577C",
  },
  text: {
    marginVertical: 10,
    color: "#142850",
  },
});

export default ResetConfirmation;

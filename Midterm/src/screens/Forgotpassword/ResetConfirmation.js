import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const ResetConfirmation = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

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
      <Input placeholder="Four digit code" value={code} setValue={setCode} />
      <Input
        placeholder="New password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry
      />
      <Input
        placeholder="Confirm password"
        value={confirmPass}
        setValue={setConfirmPass}
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

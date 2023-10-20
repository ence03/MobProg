import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import { useNavigation } from "@react-navigation/native";

const Forgotpassword = () => {
  const navigation = useNavigation();

  const onContinuePressed = () => {
    navigation.navigate("Reset Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password?</Text>
      <Input placeholder="Enter Email" />
      <Button text="Continue" type="PRIMARY" onPress={onContinuePressed} />
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
});

export default Forgotpassword;

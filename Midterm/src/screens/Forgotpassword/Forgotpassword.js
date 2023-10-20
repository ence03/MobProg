import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";

const Forgotpassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password?</Text>
      <Input placeholder="Enter Email" />
      <Button
        text="Continue"
        type="PRIMARY"
        onPress={() => {
          navigation.navigate("Reset Confirmation");
        }}
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
});

export default Forgotpassword;

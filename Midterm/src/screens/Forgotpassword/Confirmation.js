import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Button from "../../components/Buttons/Button";

const Confirmation = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your password has been reset sucessfully</Text>
      <Text style={styles.text}>Now Login with your new password</Text>
      <Button
        text="Log In"
        type="PRIMARY"
        onPress={() => {
          navigation.navigate("Log In");
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
    backgroundColor: "#EBE4D1",
    borderRadius: 5,
  },
  text: {
    marginVertical: 10,
    color: "#E55604",
  },
});

export default Confirmation;

import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Logo = () => {
  return (
    <Text style={styles.logoStyle}>
      {" "}
      Food
      <MaterialIcons name="local-dining" size={26} color="black" />
      Finder
    </Text>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    alignSelf: "center",
    color: "#f56151",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    fontFamily: "Marker Felt",
  },
});

export default Logo;

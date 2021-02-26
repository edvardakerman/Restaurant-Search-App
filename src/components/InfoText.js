import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";

const InfoText = ({ result }) => {
  return (
    <>
      <Text style={styles.infoStyle}>
        <Entypo name="home" size={20} color="#f56151" />{" "}
        {result.categories[0].title}
      </Text>
      <Text style={styles.infoStyle}>
        <Feather name="clock" size={20} color="#f56151" />{" "}
        {result.hours[0].open[0].start} - {result.hours[0].open[0].end}
      </Text>
      <Text style={styles.infoStyle}>
        <Entypo name="old-phone" size={20} color="#f56151" /> {result.phone}
      </Text>
      <Text style={styles.infoStyle}>
        <Entypo name="location-pin" size={20} color="#f56151" />{" "}
        {result.location.display_address[0]} {"\n"}{" "}
        {result.location.display_address[1]}{" "}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  infoStyle: {
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
    marginHorizontal: 50,
  },
});

export default InfoText;

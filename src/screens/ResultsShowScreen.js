import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";
import Logo from "../components/Logo";
import InfoText from "../components/InfoText";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <InfoText result={result} />
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 400,
    marginLeft: 15,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default ResultsShowScreen;

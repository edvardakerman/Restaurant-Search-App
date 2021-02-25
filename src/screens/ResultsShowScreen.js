import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

//   const editTime = (time) => {
//     var a = time.toString();
//     var b = ":";
//     var position = 2;
//     var output = [a.slice(0, position), b, a.slice(position)].join("");
//   };

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

      <Text style={styles.infoStyle}>{result.categories[0].title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.infoStyle}>Price: {result.price}</Text>
      <Text style={styles.infoStyle}>
        Hours: {result.hours[0].open[0].start} - {result.hours[0].open[0].end}
      </Text>
      <Text style={styles.infoStyle}>Phone: {result.phone}</Text>
      <Text style={styles.infoStyle}>
        Location: {result.location.display_address[0]},{" "}
        {result.location.display_address[1]}{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginLeft: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 15,
    alignSelf: "center",
    marginVertical: 20,
  },
  infoStyle: {
    alignSelf: "center",
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ResultsShowScreen;

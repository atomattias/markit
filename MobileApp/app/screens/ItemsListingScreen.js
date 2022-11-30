import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";


// const listings = [
  
//   {
//     id: 1,
//     title: "Unused bike with cheap price",
//     price: 100,
//     image: require("../assets/bike.jpg"),
//   },
//   {
//     id: 2,
//     title: "Couch in great condition",
//     price: 1000,
//     image: require("../assets/couch.jpg"),
//   },
//   {
//     id: 3,
//     title: "Camera Used but in good condition",
//     price: 100,
//     image: require("../assets/camera.jpg"),
//   },
//   {
//     id: 4,
//     title: "Del Latidtude Laptop cheap Price",
//     price: 100,
//     image: require("../assets/laptop.jpg"),
//   },
// ];

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => { 
    const response = await listingApi.getListings();
    setListings(response.data)
  }
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

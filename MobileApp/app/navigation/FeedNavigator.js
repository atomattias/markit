import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ItemsListingScreen";
import ListingDetailsScreen from "../screens/ItemDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Items" component={ListingsScreen} />
    <Stack.Screen name="ItemDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;

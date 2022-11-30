import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";
import GoogleSVG from "../assets/misc/google.svg";
import FacebookSVG from "../assets/misc/facebook.svg";
import TwitterSVG from "../assets/misc/twitter.svg";


function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Buy and sell used items </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          color="tertiery"

          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="tertiery"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 100,
          }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 60,
  },
  externalAuth: {
    padding: 30,
    width: "100%",
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 60,
  },
});

export default WelcomeScreen;

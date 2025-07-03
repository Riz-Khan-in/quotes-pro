// App.js
import React from "react";
import Constants from "expo-constants";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeNavigator from "./src/navigation/HomeNavigator";

const Stack = createStackNavigator();

// Optional: log your runtime config to verify you’re loading .env / app.json “extra”
console.log("Runtime config:", Constants.expoConfig.extra);

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // glass-morphic semi-transparent whites
    primary: "#ffffff88",
    accent: "#ffffff44",
    background: "#f0f0f088",
  },
  roundness: 16,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

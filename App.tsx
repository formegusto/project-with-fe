import React from "react";
import MainPage from "./pages/MainPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PortfolioPage from "./pages/PortfolioPage";
import SharePage from "./pages/SharePage";
import AdPage from "./pages/AdPage";
import MyPage from "./pages/MyPage";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

const Nav = createBottomTabNavigator();
function App() {
  const [fontLoaded, setFontLoaded] = React.useState<boolean>(false);
  const loadFonts = React.useCallback(async () => {
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Thin": {
        uri: require("./assets/fonts/Roboto-Thin.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Roboto-Light": {
        uri: require("./assets/fonts/Roboto-Light.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Roboto-Medium": {
        uri: require("./assets/fonts/Roboto-Medium.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Roboto-Bold": {
        uri: require("./assets/fonts/Roboto-Bold.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
      "Roboto-Black": {
        uri: require("./assets/fonts/Roboto-Black.ttf"),
        display: Font.FontDisplay.FALLBACK,
      },
    });

    setFontLoaded(true);
  }, []);

  React.useEffect(() => {
    loadFonts();
  }, [loadFonts]);

  // Nav List
  // 1. Portfolio
  // 2. Share
  // 3. Home
  // 4. ad
  // 5. my

  return (
    fontLoaded && (
      <NavigationContainer>
        <Nav.Navigator initialRouteName="home">
          <Nav.Screen
            name="portfolio"
            component={PortfolioPage}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="document-sharp"
                  size={24}
                  color={focused ? "#007AFF" : "gray"}
                />
              ),
            }}
          />
          <Nav.Screen
            name="share"
            component={SharePage}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="people"
                  size={24}
                  color={focused ? "#007AFF" : "gray"}
                />
              ),
            }}
          />
          <Nav.Screen
            name="home"
            component={MainPage}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="home"
                  size={24}
                  color={focused ? "#007AFF" : "gray"}
                />
              ),
            }}
          />
          <Nav.Screen
            name="ad"
            component={AdPage}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="flag"
                  size={24}
                  color={focused ? "#007AFF" : "gray"}
                />
              ),
            }}
          />
          <Nav.Screen
            name="my"
            component={MyPage}
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name="person"
                  size={24}
                  color={focused ? "#007AFF" : "gray"}
                />
              ),
            }}
          />
        </Nav.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;

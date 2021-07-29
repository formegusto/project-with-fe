import React from "react";
import MainPage from "./pages/MainPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PortfolioPage from "./pages/PortfolioPage";
import SharePage from "./pages/SharePage";
import AdPage from "./pages/AdPage";
import MyPage from "./pages/MyPage";
import { Ionicons } from "@expo/vector-icons";

const Nav = createBottomTabNavigator();
function App() {
  // Nav List
  // 1. Portfolio
  // 2. Share
  // 3. Home
  // 4. ad
  // 5. my

  return (
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
  );
}

export default App;

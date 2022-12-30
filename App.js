import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/features/home/screens/Home";
import Map from "./src/features/map/screens/Map";
import Setting from "./src/features/setting/screens/Setting";
import { SafeArea } from "./src/components/Utility/safe_area";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ResturantsContextProvider } from "./src/services/resturants/resturantContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
const Tab = createBottomTabNavigator();

const TabIconNames = {
  Home: "home",
  Map: "google-maps",
  Setting: "account-settings",
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons
        name={TabIconNames[route.name]}
        size={size}
        color={color}
      />
    ),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

function MyTabs() {
  return (
    <SafeArea>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </SafeArea>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <LocationContextProvider>
        <ResturantsContextProvider>
          <NavigationContainer>
            <MyTabs />
            <StatusBar style="auto" />
          </NavigationContainer>
        </ResturantsContextProvider>
      </LocationContextProvider>
    </PaperProvider>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductsStack from "./ProductsStack";
import FavoritesStack from "./FavoritesStack";
import ProfileStack from "./ProfileStack";
import TabBarIcon from "../components/TabBarIcon";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon text="Productos" focused={focused} icon="shopping-cart" />;
            },
          }}
          name="Inicio"
          component={ProductsStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon focused={focused} text="Favoritos" icon="heart" />;
            },
          }}
          name="Favoritos"
          component={FavoritesStack}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <TabBarIcon focused={focused} text="Mi perfil" icon="man" />;
            },
          }}
          name="Mi perfil"
          component={ProfileStack}
        />
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: "#f0db4c",
      shadowColor: "black",
      elevation: 4,
      bottom: 15,
      position: "absolute",
      left: 20,
      right: 20,
      borderRadius: 15,
      height: 75,
    },
  });
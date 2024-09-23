import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./AuthStack";
import { useState } from "react";
import { TabNavigator } from "./TabNavigator";
export const Navigator = () => {

  const [jwt, setJwt] = useState("")

  return (
    <NavigationContainer>
      {jwt ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};



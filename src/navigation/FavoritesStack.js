import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";

const FavoritesStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;

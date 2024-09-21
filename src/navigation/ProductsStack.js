import { ItemListContainer } from "../screens/ItemListContainer";
import { ItemDetailContainer } from "../screens/ItemDetailContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ProductsStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
    // screenOptions={({route})=> {
    //   return {
    //     header: () => <Header />
    //   }
    // }}
    >
      <Stack.Screen name="Inicio" component={ItemListContainer} />
      <Stack.Screen name="Detalle" component={ItemDetailContainer} />
    </Stack.Navigator>
  );
};

export default ProductsStack;

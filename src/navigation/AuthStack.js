import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Iniciar sesion" component={Login} />
            <Stack.Screen name="Registrarse" component={Register}/>
        </Stack.Navigator>
    )
}
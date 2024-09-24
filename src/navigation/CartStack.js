import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Headerr from '../Components/Headerr'
import Cart from '../screens/Cart'

const Stack = createNativeStackNavigator()

const CartStack = () => {
  return (
    <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Headerr title="carrito"/>
                    }
                }
            )}
        >
            <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
  )
}

export default CartStack
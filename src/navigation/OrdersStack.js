import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Headerr from '../Components/Headerr'
import Orders from '../screens/Orders'
import OrderDetail from '../screens/OrderDetail'

const Stack = createNativeStackNavigator()

const OrdersStack = () => {


  return (
    <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Headerr title="ordenes"/>
                    }
                }
            )}
        >
            <Stack.Screen name='Orders' component={Orders}/>
            <Stack.Screen name='OrderDetail' component={OrderDetail}/>
        </Stack.Navigator>
  )
}

export default OrdersStack
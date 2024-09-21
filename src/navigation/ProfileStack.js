import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MyProfile from "../screens/MyProfile"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Mi perfil" component={MyProfile}/>
    </Stack.Navigator> 
  )
}

export default ProfileStack


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Headerr from '../Components/Headerr'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
            screenOptions={(
                () => {
                    return {
                        header: () => <Headerr title="mi perfil"/>
                    }
                }
            )}
        >
            <Stack.Screen name='MyProfile' component={MyProfile}/>
            <Stack.Screen name='ImageSelector' component={ImageSelector}/>
        </Stack.Navigator>
  )
}

export default ProfileStack

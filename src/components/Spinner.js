import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="white"/>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.green1
    }
})
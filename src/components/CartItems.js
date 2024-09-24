import { StyleSheet, Text, View } from 'react-native'

const CartItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>{item.price} $</Text>
      </View>
      <Entypo name="trash" size={48} color="black" />
    </View>
  )
}

export default CartItems

const styles = StyleSheet.create({
    container:{
        width:"90%",
        marginHorizontal:"5%",
        backgroundColor:colors.green2,
        marginVertical:10,
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:3
    },
    containerText:{
        width:"70%",
        gap:5
    },
    title:{
        color:"white",
        fontSize:20
    },
    brand:{
        color:"white",
        fontSize:16
    },
    price:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    }
})
import { StyleSheet, Text, View } from 'react-native'


const ProductsCard =({ item, navigation }) => {
    return (
      <Pressable style={styles.itemContainer} onPress={() => navigation.navigate("Detalle", { item })}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </Pressable>
    );
  };
  
  export default ProductsCard;
  
  const styles = StyleSheet.create({
    itemContainer: {
      padding: 15,
      marginVertical: 10,
      backgroundColor: '#f9f9f9',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 2,
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    itemPrice: {
      fontSize: 14,
      color: '#555',
    },
  });
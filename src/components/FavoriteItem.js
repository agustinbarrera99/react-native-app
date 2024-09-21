import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const FavoriteItem = () => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>Titulo del producto</Text>
        <Text style={styles.seller}>Vendedor: </Text>
        <Text style={styles.price}>$50000</Text>
        <Image style={styles.image} source={{ uri: "https://via.placeholder.com/150" }} />
        <Pressable style={styles.icon}>
          <FontAwesome name="remove" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  seller: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

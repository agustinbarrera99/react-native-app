import { StyleSheet, View, FlatList } from 'react-native';
import MyProductsCard from './MyProductsCard';

const MyProductsContainer = () => {
  const userProducts = [
    {
      id: '1',
      title: 'Producto 1',
      price: '$1000',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '2',
      title: 'Producto 2',
      price: '$1500',
      image: 'https://via.placeholder.com/100',
    },
    {
      id: '3',
      title: 'Producto 3',
      price: '$2000',
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={userProducts}
        renderItem={({ item }) => <MyProductsCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyProductsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useGetProductsQuery } from '../app/services/shop';
import ProductsCard from '../components/ProductsCard';

export const ItemListContainer = ({ navigation }) => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  console.log(products)

  if (isLoading) return <Text style={styles.loading}>Cargando...</Text>;
  if (error) return <Text style={styles.error}>Error al cargar los productos</Text>;

  return (
    <FlatList 
      data={products}
      keyExtractor={item => item.id.toString()} 
      renderItem={({ item }) => <ProductsCard item={item} navigation={navigation} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 18,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
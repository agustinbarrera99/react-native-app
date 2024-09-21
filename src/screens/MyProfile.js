import MyProducts from '../components/MyProductsContainer';
import UserData from '../components/UserData';
import { Text, View, StyleSheet } from 'react-native';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <UserData />
      <Text style={styles.sectionTitle}>Mis productos</Text>
      <MyProducts />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 20,
    color: '#333',
    textAlign: 'left',
  },
});
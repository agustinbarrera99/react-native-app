import { StyleSheet, Text, View } from "react-native";
import { useGetCategoriesQuery } from "../services/shop";

const Categorias = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Category item={item} />}
    />
  );
};

export default Categorias;

const styles = StyleSheet.create({});

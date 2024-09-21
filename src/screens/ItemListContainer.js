import { Pressable, StyleSheet, Text, View } from 'react-native'

export const ItemListContainer = ({navigation}) => {
  return (
    <View>
      <Text>Pagina principal</Text>
      <Pressable onPress={() => navigation.navigate("Detalle")}><Text>Ir a la pagina de detalles</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})
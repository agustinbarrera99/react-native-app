import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItems from '../Components/OrderItems'
import {  useGetOrdersByUserQuery } from '../services/orders'
import Spinner from '../Components/Spinner'
import { useSelector } from 'react-redux'

const Orders = () => {

  const localId = useSelector(state => state.auth.localId)

  const {data:orders,isLoading} = useGetOrdersByUserQuery(localId)


  if(isLoading) return <Spinner />

  if(orders.length === 0) return <View><Text>vacio</Text></View>
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItems item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})
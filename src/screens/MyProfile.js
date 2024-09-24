import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import { useEffect } from 'react'
import SubmitButon from '../Components/SubmitButon'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import Spinner from '../Components/Spinner'

const MyProfile = ({navigation}) => {
  const localId = useSelector(state => state.auth.localId)
  const {data:user,isSuccess,isLoading,isError,error} = useGetUserQuery({localId})
  useEffect(()=>{
    if(isSuccess) console.log(user)
    if(isError) console.log(error)
  },[isSuccess,isError])

  if(isLoading) return <Spinner />
  return (
    <View style={styles.container}>
      <Image
        source={user.image ? 
                {uri:user.image}
                :
                require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButon title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    image:{
        width:150,
        height:150
    }
})
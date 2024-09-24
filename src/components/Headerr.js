import { StyleSheet, Text, View, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";


const Headerr = ({ title }) => {
  const dispatch = useDispatch();
  const idToken = useSelector((state) => state.auth.idToken);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {idToken && 
      <Pressable onPress={onLogout} style={styles.logout}>
        <AntDesign name="logout" size={30} color="black" />
      </Pressable>}
    </View>
  );
};

export default Headerr;

const styles = StyleSheet.create({
    container:{
      marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
      backgroundColor:colors.green2,
      width:"100%",
      height:80,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      position:"relative"
    },
    text:{
      fontSize:25,
      fontFamily:'Josefin'
    },
    icon:{
      position:"absolute",
      left:20
    },
    logout:{
      position:"absolute",
      right:10,
      bottom:20
    }
  })

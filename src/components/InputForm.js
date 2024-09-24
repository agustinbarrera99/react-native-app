import { StyleSheet, Text, View,TextInput } from 'react-native'
import { colors } from '../global/colors';

export const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: colors.green2,
    paddingVertical: 8,
    fontFamily: "Josefin",
    fontSize: 16,
  },
  titleInput: {
    fontSize: 18,
    fontFamily: "Josefin",
    color: colors.green2,
  },
  error: {
    fontSize: 14,
    color: "red",
    fontFamily: "Josefin",
    marginTop: 5,
  },
});
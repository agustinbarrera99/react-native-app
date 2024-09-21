import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const TabBarIcon = ({ text, icon, focused }) => {
  return (
    <View stytle={styles.container}>
      <Entypo color={focused ? "blue" : "black"} style={styles.icon} name={icon} size={24} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
    container: {alignItems: "center", gap: 5}
});

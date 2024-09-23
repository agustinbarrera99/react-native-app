import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Input from "../components/Input";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <Input
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Iniciar sesión")}>
        <Text style={styles.link}>¿Ya tienes una cuenta? Inicia sesión</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#007BFF",
    textDecorationLine: 'underline',
  },
});

export default Register;
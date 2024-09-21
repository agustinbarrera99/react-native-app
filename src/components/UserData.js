import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const UserData = () => {
  const user = {
    username: 'AgustinBarrera',
    email: 'agustin@gmail.com',
    profileImage: 'https://via.placeholder.com/150',
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={{ uri: user.profileImage }} />
        <Pressable style={styles.cameraIcon} onPress={() => { /* Future action for changing profile picture */ }}>
          <FontAwesome name="camera" size={24} color="black" />
        </Pressable>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Pressable onPress={() => { /* Future action for editing username */ }}>
          <FontAwesome name="pencil" size={24} color="black" style={styles.icon} />
        </Pressable>
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.email}>{user.email}</Text>
        <Pressable onPress={() => { /* Future action for editing email */ }}>
          <FontAwesome name="pencil" size={24} color="black" style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

export default UserData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 15,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: '#555',
  },
  icon: {
    marginLeft: 10,
  },
});

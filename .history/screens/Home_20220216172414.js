import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safe_view: {
    flex: 1,
  },
  container: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});

export default Home;

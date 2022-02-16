import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#b3e6ff" barStyle="dark-content" />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safe_view: {
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
  },
});

export default Home;

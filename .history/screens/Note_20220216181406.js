import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar barSt00yle="dark-content" backgroundColor={"red"} />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#0099FF",
    height: "100%",
  },
});

export default Home;

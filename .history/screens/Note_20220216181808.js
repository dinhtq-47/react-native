import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />
      </View>
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
  StatusBar: {
    height: 20,
    backgroundColor: "rgba(22,7,92,1)",
  },
});

export default Home;

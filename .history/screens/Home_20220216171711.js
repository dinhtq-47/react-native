import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      <StatusBar></StatusBar>
      <SafeAreaView style={styles.safe_view}>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safe_view: {
    backgroundColor: "red",
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: "red",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Home;

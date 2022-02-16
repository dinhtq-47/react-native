import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={red}></StatusBar>
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
    flex: 1,
  },
  container: {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});

export default Home;

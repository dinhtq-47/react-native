import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="red" />
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
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

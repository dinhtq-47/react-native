import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      style=
      {{
        flex: 1,
        backgroundColor: "green",
      }}
      >
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Home;

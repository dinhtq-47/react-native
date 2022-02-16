import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      <View style={styles.StatusBar}>
        <StatusBar translucent barStyle="light-content" />
      </View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  StatusBar: {
    height: 100,
    backgroundColor: "#0099FF",
  },
});

export default Home;

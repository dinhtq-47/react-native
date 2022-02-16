import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View>
      <StatusBar></StatusBar>
      <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});

export default Home;

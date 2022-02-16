import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
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

  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: "center",
    marginBottom: 8,
  },
});

export default Home;

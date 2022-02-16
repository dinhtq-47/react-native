import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const HomeSearch = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>HomeSearch</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30",
  },
  StatusBar: {
    height: 50,
    backgroundColor: "#0099FF",
  },
});

export default HomeSearch;

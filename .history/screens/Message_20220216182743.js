import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";
import HomeSearch from "../components/HomeSearch";
const Message = () => {
  return (
    <View>
      <View style={styles.StatusBar}>
        <StatusBar barStyle="light-content" />
      </View>
      <SafeAreaView>
        <HomeSearch></HomeSearch>
        <View style={styles.container}>
          <Text>Message</Text>
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
    height: 50,
    backgroundColor: "#0099FF",
  },
});

export default Message;

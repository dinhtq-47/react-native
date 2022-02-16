import { StyleSheet, View, StatusBar, Text, SafeAreaView } from "react-native";

const Contact = () => {
  return (
    <View>
      <View style={styles.StatusBar}>
        <StatusBar barStyle="light-content" />
      </View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Contact</Text>
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

export default Contact;

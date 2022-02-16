import "react-native-gesture-handler";
import { View } from "react-native";
import HomeTab from "./navigations/Home";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 }}>
        <HomeTab />
      </View>
    </NavigationContainer>
  );
};

export default App;

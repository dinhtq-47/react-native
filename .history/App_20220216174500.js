import "react-native-gesture-handler";
import { View } from "react-native";
import HomeTab from "./navigations/Home";
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <HomeTab />
    </View>
  );
};

export default App;

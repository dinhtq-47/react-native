import "react-native-gesture-handler";
import { View } from "react-native";
import Home from "./screens/Home";
const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Home />
    </View>
  );
};

export default App;

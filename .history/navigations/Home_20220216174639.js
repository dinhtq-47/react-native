import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeTab;
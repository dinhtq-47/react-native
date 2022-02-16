import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Discover from "../screens/Discover";
import Note from "../screens/Note";
import Individual from "../screens/Individual";
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Note" component={Note} />
      <Tab.Screen name="Individual" component={Individual} />
    </Tab.Navigator>
  );
};

export default HomeTab;

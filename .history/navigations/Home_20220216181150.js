import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Discover from "../screens/Discover";
import Note from "../screens/Note";
import Individual from "../screens/Individual";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StatusBar } from "react-native";
const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Message",
            tabBarIcon: ({ color, size }) => (
              <Icon name="comment-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: "Contact",
            tabBarIcon: ({ color, size }) => (
              <Icon name="contacts" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: "Discover",
            tabBarIcon: ({ color, size }) => (
              <Icon name="earth-arrow-right" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Note"
          component={Note}
          options={{
            tabBarLabel: "Note",
            tabBarIcon: ({ color, size }) => (
              <Icon name="notebook" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Individual"
          component={Individual}
          options={{
            tabBarLabel: "Individual",
            tabBarIcon: ({ color, size }) => (
              <Icon name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeTab;

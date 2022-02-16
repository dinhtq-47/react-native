import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Message from "../screens/Message";
import Contact from "../screens/Contact";
import Discover from "../screens/Discover";
import Note from "../screens/Note";
import Profile from "../screens/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Message"
        component={Message}
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
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;

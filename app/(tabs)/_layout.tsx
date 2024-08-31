import {Tabs} from 'expo-router';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeFont from 'react-native-vector-icons/FontAwesome';
export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="MyConnex" options={{
            tabBarIcon: ({ color, size }) => (
              <EntypoIcon name="slideshare" color={color} size={size} />
            ),
          }}/>
            <Tabs.Screen name="Chat" options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="message1" color={color} size={size} />
            ),
          }}/>
            <Tabs.Screen name="MemoryAI" options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcon name="robot-happy-outline" color={color} size={size} />
            ),
          }}/>
            <Tabs.Screen name="MemoryLane" options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeFont name="photo" color={color} size={size} />
            ),
          }}/>
            <Tabs.Screen name="Settings" options={{
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="settings" color={color} size={size} />
            ),
          }}/>
        </Tabs>
    );
};

// import { createStackNavigator } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
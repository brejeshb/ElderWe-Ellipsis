import { Text, View } from "react-native";
import {Stack} from "expo-router";
import {Redirect} from "expo-router";

// const StackLayout = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="Login" component={LoginScreen} />
//     </Stack>
//   );
// };

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Hello World</Text>
//     </View>
//   );
// }

const StartPage = () => {
  return <Redirect href="/LoginScreen" />;

};

export default StartPage;
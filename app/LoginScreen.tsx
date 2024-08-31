// import React from 'react';
// import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

// const login = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState('');

//   return (
//     <SafeAreaView>
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeText}
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={onChangeNumber}
//         value={number}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

// export default login;


import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // Logic for login, e.g., authentication, can be placed here
    router.push('/(tabs)/MyConnex');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Stack.Screen options={{ title: 'Login' }} />
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, textAlign: 'center' }}>ELDERWE!</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          height: 50,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
      />

      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#FF7F50', padding: 15, borderRadius: 8 }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>Log in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Text>Log in with </Text>
        <Text style={{ color: '#4285F4' }}>Google </Text>
        <Text>or </Text>
        <Text style={{ color: '#4267B2' }}>Facebook</Text>
      </View>

      {/* <TouchableOpacity onPress={() => router.push('/(tabs)/signup')} style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', color: '#FF7F50' }}>No account? Sign up</Text>
      </TouchableOpacity> */}
    </View>
  );
}

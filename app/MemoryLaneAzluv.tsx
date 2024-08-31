

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MemoryLane = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MEMORY LANE!</Text>
        <View style={styles.profile}>
          <Image
            source={require('./(tabs)/azluv/azluv_on_road.png')}
            style={styles.profileImage}
          />
          <Text>Azluv</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.memoryGrid}>
        <Image
          source={require('./(tabs)/azluv/azluv_on_road.png')}
          style={styles.memoryImage}
        />
        <Image
          source={require('./(tabs)/azluv/azluv_taylorswift.png')}
          style={styles.memoryImage}
        />
        <Image
          source={require('./(tabs)/azluv/azluv_with_girl.png')}
          style={styles.memoryImage}
        />
        <Image
          source={require('./(tabs)/azluv/azluv_with_cake.png')}
          style={styles.memoryImage}
        />
        <Image
          source={require('./(tabs)/azluv/azluv_with_dorothy.png')}
          style={styles.memoryImage}
        />
        <Image
          source={require('./(tabs)/azluv/azluv_with_cat.png')}
          style={styles.memoryImage}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0070f3',
  },
  profile: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  memoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  memoryImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default MemoryLane;

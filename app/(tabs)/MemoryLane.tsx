import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const MemoryLane = () => {
  const router = useRouter();

  const people = [
    { name: 'Cledwyn', image: require('./pictures/azluv.png') },
    { name: 'Brejesh', image: require('./pictures/brejseh.png') },
    { name: 'Azluv', image: require('./pictures/cled.png') },
    { name: 'Dorothy', image: require('./pictures/dorothy.png') },
    { name: 'Peter', image: require('./pictures/jenny.png') },
    { name: 'Jenny', image: require('./pictures/peter.png') },
  ];

  const handleUploadPress = () => {
    router.push('../MemoryLaneUploads');
  };

  const handleImagePress = () => {
    router.push('../MemoryLaneAzluv');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>{'<'} MEMORYLANE!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUploadPress}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab}><Text>People</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text>✨Memories✨</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tab}><Text>Albums</Text></TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.grid}>
          {people.map((person, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.personContainer} 
              onPress={handleImagePress}>
              <Image source={person.image} style={styles.personImage} />
              <Text>{person.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10 },
  backButton: { fontSize: 18, color: '#00A1E4' },
  addButton: { fontSize: 28, color: '#00A1E4' },
  tabContainer: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  tab: { marginHorizontal: 10, padding: 5, borderRadius: 20, backgroundColor: '#f0f0f0' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' },
  personContainer: { alignItems: 'center', marginBottom: 20 },
  personImage: { width: 100, height: 100, borderRadius: 50 },
});

export default MemoryLane;

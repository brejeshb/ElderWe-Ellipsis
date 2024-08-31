import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const MemoryLaneUploads = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>{'<'} MEMORYLANE!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.uploadText}>Upload your memories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  backButton: {
    fontSize: 24,
    color: '#00A1E4',
  },
  uploadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  uploadButtonText: {
    fontSize: 32,
    color: '#000',
  },
  uploadText: {
    marginTop: 20,
    fontSize: 18,
    color: '#000',
  },
});

export default MemoryLaneUploads;

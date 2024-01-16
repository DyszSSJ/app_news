/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface DetailScreenProps {
  route: any;
}

export default function DetailScreen({route}: DetailScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params.title}</Text>
      <Text style={styles.description}>{route.params.description}</Text>
      <Image source={{uri: route.params.urlToImage}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});

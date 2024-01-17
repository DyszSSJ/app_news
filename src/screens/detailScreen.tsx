/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface DetailScreenProps {
  route: any;
}

export default function DetailScreen({route}: DetailScreenProps) {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{uri: route.params.urlToImage}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.description}>{route.params.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  image: {
    width: 'auto',
    height: 400,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 21,
    fontWeight: '700',
    padding: 10,
    color: '#000',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    padding: 20,
    color: '#7c7c7c',
  },
});

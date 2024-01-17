/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => (
  <View style={styles.splashContainer}>
    <Image source={require('../assets/logo.jpg')} style={styles.splashImage} />
    <Text style={styles.project}>Noticias Mundiales</Text>
    <Text style={styles.title}>Desarrollado por:</Text>
    <Text style={styles.name}>Axel David Téllez Álvarez</Text>
  </View>
);

export default SplashScreen;

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  title: {
    fontSize: 22,
    color: '#333',
    marginBottom: 10,
  },
  project: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CardProps {
  navigation: any;
  item: any;
  index: string;
}

const Card = ({item, navigation}: CardProps) => {
  const truncateText = (
    text: string | null | undefined,
    limit: number,
  ): string => {
    const safeText = text ?? '';
    return safeText.length > limit
      ? `${safeText.substring(0, limit)}...`
      : safeText;
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View>
          {item.urlToImage && (
            <Image source={{uri: item.urlToImage}} style={styles.image} />
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {truncateText(item.title, 25)}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail">
            {truncateText(item.description, 70)}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('detail', {
                url: item.url,
                title: item.title,
                description: item.description,
                urlToImage: item.urlToImage,
              });
            }}>
            <Text style={styles.buttonText}>Ver más</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
  },
  image: {
    width: 100,
    height: 115,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    width: 100,
    backgroundColor: '#5c6cff',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

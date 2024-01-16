/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface NewsResponse {
  articles: Article[];
}

function HomeScreen({navigation}: {navigation: any}) {
  const [data, setData] = useState<NewsResponse>({articles: []});
  const key = '84732764929840849457bbdc501797eb';

  const getData = async () => {
    try {
      const response = await axios.get<NewsResponse>(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`,
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      {data.articles.map((item, index) => (
        <View key={index} style={styles.card}>
          <View>
            {item.urlToImage && (
              <Image source={{uri: item.urlToImage}} style={styles.image} />
            )}
          </View>
          <View>
            <Text style={styles.subtitle}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
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
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  card: {
    backgroundColor: '#ffffff',
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666666',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
    borderRadius: 4,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#5c6cff', // Color de fondo azul
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Texto en blanco
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

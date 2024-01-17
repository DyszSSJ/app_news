/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import Card from '../components/Card';

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
        <Card navigation={navigation} item={item} key={`article-${index}`}  />
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
});

export default HomeScreen;

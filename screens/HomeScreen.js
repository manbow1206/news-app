import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';

import ListItem from '../components/ListItem.js';

const URL = `https://newsapi.org/v2/everything?q=tesla&from=2021-10-21&sortBy=publishedAt&apiKey=${Constants.manifest.extra.newsApiKey}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

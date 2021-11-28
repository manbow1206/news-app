import React from 'react';
import { StyleSheet, SafeAreaView, Text, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={user}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              props.navigation.navigate('Article', { article: item })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default ClipScreen;

import React from 'react';
import { StyleSheet, Platform, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> This is Article</Text>
    </SafeAreaView>
  );
};

import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip Screen</Text>
    </SafeAreaView>
  );
};

export default ClipScreen;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ERROR !!!</Text>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#ff0000',
    fontWeight: 'bold',
  },
});

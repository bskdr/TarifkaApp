import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FFA500" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

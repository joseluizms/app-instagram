import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './src/components/Title'
import Main from './src/components/Main/index'

export default function App() {
  return (
    <View style={styles.container}>
     <Title/>
     <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,  // Ajuste este valor conforme necessário
    justifyContent: 'center', // Alinha o conteúdo verticalmente ao centro
    alignItems: 'center', // Alinha o conteúdo horizontalmente ao centro
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
});

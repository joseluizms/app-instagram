import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="EX.admin@hotmail.com"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha aqui"
          secureTextEntry={true}
        />
      </View>
      <Button title="Log In" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50, // Aumenta a altura
    borderColor: '#ccc', // Cor da borda mais suave
    borderWidth: 1,
    borderRadius: 12, // Bordas arredondadas
    backgroundColor: '#f9f9f9', // Cor de fundo suave
    paddingLeft: 16, // Espaçamento interno à esquerda
    paddingRight: 16, // Espaçamento interno à direita
    shadowColor: "#000", // Configurações de sombra abaixo são mais eficazes no iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4, // Efeito de elevação para Android
  },
    
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
});


import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

//To create this app:
// $ npm i -g expo-cli
// $ expo init pokedex
// - choose the blank template
// Note: expo init creates a new react native project, and will also git init the project.  
// If the project is within an existing git repository, it should skip git init, but make sure that it does so 
// by deleting an extra .git in the project if it is there
// $ cd pokedex
// $ expo start

//If you open up Expo Devtools, you could open a simulator and see if the app works - it should display “Open up App.js to start working on your app!”

const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=> {
    fetch(`${POKEMON_API_ENDPOINT}${FIRST_100_POKEMON_QUERY}`)
    .then(res => res.json())
    .then(payload => {
      console.log(payload);
    })
  }, [])
  
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Text>Hello world</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  body: {
    flex: 5
  }
});

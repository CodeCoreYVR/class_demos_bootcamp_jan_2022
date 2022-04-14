import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import { NavigationContainer } from '@react-navigation/native'; //this is necessary for navigation
import { createStackNavigator } from '@react-navigation/stack'; //this is necessary for navigation

// -----To create this app:---->
// $ npm i -g expo-cli
// $ expo init pokedex
// - choose the blank template
// Note: expo init creates a new react native project, and will also git init the project.  
// If the project is within an existing git repository, it should skip git init, but make sure that it does so 
// by deleting an extra .git in the project if it is there
// $ cd pokedex
// $ expo start

//If you open up Expo Devtools, you could open a simulator and see if the app works - it should display “Open up App.js to start working on your app!”

// -----Navigation---->
// react-native does not work with urls, so therefore navigation works differently.  You need to install dependencies:
// https://reactnavigation.org/docs/nesting-navigators
// https://reactnavigation.org/docs/getting-started/

// $ npm install @react-navigation/native
// $ npm install @react-navigation/stack
// $ expo install react-native-screens react-native-safe-area-context

// If the installation of these dependencies give you the following error:

// iOS Bundling failed 8281ms
// Unable to resolve module react-native-gesture-handler

// Try fixing it with this:

// $ npm uninstall react-native-gesture-handler --save 
// $ npm install react-native-gesture-handler --save



//create stack object
const Stack = createStackNavigator();

const POKEMON_API_ENDPOINT = 'https://pokeapi.co/api/v2/';
const FIRST_100_POKEMON_QUERY = 'pokemon?limit=100';

export default function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(()=> {
    fetch(`${POKEMON_API_ENDPOINT}${FIRST_100_POKEMON_QUERY}`)
    .then(res => res.json())
    .then(payload => {
      console.log(payload);
      setPokemonList(payload.results);
    })
  }, [])

  return (
    <NavigationContainer style={styles.container}>
      <Header/>
      <View style={styles.body}>
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false
            }
          }
          >
          <Stack.Screen
          name="Pokemon List"
          children={()=>{
            return <PokemonList list={pokemonList}/>
          }}
          />
        </Stack.Navigator>
      </View>
      <StatusBar style="auto" />
    </NavigationContainer>
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

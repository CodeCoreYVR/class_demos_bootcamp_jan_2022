import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Pokédex</Text>
      </View>
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
  header: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    borderBottomWidth: 15
  },
  body: {
    flex: 5
  },
  h1: {
    fontSize: 40
  }
});

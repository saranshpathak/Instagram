import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import  firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBmk3ODLlA-Dnm-SJnf54JBCnNznMQz98g",
  authDomain: "instagtram-dev.firebaseapp.com",
  projectId: "instagtram-dev",
  storageBucket: "instagtram-dev.appspot.com",
  messagingSenderId: "905379558776",
  appId: "1:905379558776:web:965ffd4bf9e2639cf8c48d"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}

import Landing from './components/Landing';
import Login from './components/Login'
import SignUp from './components/SignUp'
const Stack =createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

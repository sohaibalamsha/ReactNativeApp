/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Button, Text, View } from 'react-native';
import React from 'react'
import First from './src/First';
import Second from './src/Second';

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>This is my react native Application</Text>
      <Text style={{ fontSize: 30 }}>This is my react native App</Text>
      <Button title='Press here'/>
      <First/>
      <Second/>
    </View>
  )
};

export default App
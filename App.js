import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [radius,setRadius] =useState('');
  const [height,setHeight] =useState('');
  const [volume,setvolume] =useState('');


  return (
    <View style={styles.container}>
      <Text>Kúp térfogatának kiszámítása</Text>
      <Text>Sugár</Text>
      <StatusBar style="auto" />
    <TextInput
    style={styles.inputField}
    onChangeText= {(radius) => setRadius(radius)}></TextInput>
      <Text>Magasság</Text>
      <StatusBar style="auto" />
    <TextInput
    style={styles.inputField}
    onChangeText= {(height) => setHeight(height)}></TextInput>
      <Text>Eredény</Text>
      <StatusBar style="auto" />
    <TextInput
    style={styles.inputField}
    onChangeText= {(volume) => setvolume(volume)}></TextInput>

<TouchableHighlight
style={styles.button}

><Text>Számít</Text></TouchableHighlight>


    </View>
  );
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a570c4',
    alignItems: 'center',
    justifyContent: 'center',

   
  },
  inputField:{
    backgroundColor:"#c5f3fd",
    borderRadius:'25px',
    width :'90%',
  },
  button: {
    backgroundColor: '#f3eadb',
    borderRadius:'25px',
    padding:"17px",
    margin:"15px",
  }
});

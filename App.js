import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground,StyleSheet, Text, TextInput,Pagelogo,
  View, Image, Dimensions, Platform, Button, TouchableOpacity, LogBox } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/fondo.png')} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <View style={styles.footer}>
          <Pagelogo source={require('./../my-project/assets/logo.png')}/>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20
  },

  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  text_footer: {
    color: 'black',
    fontSize: 18
  },
  TextInput: {
    flex: 1,
    color: '#05375a',
    paddingLeft: 10
  },
  signIn: {
    width: '100%',
    width: 50,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 10
  },
  accion: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
  },
});

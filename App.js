import { StyleSheet, SafeAreaView } from 'react-native';
import React, { useState, createContext } from "react";
import MyContextProvider from './src/contexts/MyContext';
import ContadorSomar from './src/components/ContadorSomar';
import ContadorSubtrair from './src/components/ContadorSubtrair';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <MyContextProvider>
        <ContadorSomar/>
        <br/>
        <ContadorSubtrair/>
      </MyContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

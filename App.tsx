/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useEffect, useState, createContext, useContext } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  Image,
  Platform,
  useColorScheme,

  View,
  Alert,

} from 'react-native';
import globalStyles from './Styles/activity.';
import Form from "./components/auth/components/form"
import SwichLanguage from "./components/swichLanguage"
import translation from "./config/translations/translation"
import { GlobalProvider } from './context/context';
import { GlobalContext } from './context/context'
import Login from './components/auth/login'
function App(): React.JSX.Element {


  const handleChildDataChange = (data) => {
    data === 'en' ? setChildData(1) : setChildData(0)


  };


  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>


  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

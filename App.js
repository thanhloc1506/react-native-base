import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  // SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, ThemeProvider} from 'react-native-elements';
import AppNavigator from './src/navigations/index';

const Container = styled.View`
  flex: 1;
`;

const YourApp = () => {
  const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <>
      <AppNavigator />
    </>
  );
};

export default YourApp;

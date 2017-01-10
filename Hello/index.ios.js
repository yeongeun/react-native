/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text, View, Navigator } from 'react-native';
 import Weather from './src/views/Weather';

 AppRegistry.registerComponent('Hello', () => Weather);

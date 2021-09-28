/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  onScrollEndDrag,
  Platform,
  PermissionsAndroid,
  Image,

} from 'react-native';

import BottomSheet from 'react-native-simple-bottom-sheet';
// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import TemperatureTable from './TemperatureTable';
import DrawMap from './DrawMap';
import data from './data.json';


const App = () => {

  return (
    <View style={{ flex: 1 }}>
      <DrawMap />
      <TemperatureTable data={data} />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  BottomView: {
    marginBottom: 10
  },
  HeadStyle: {
    height: 50,
    alignContent: "center",
    backgroundColor: '#ffe0f0'
  },
  TextStyle: {
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10

  },
  TableStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  }
});

export default App;

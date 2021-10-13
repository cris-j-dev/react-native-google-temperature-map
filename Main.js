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

import TemperatureTable from './TemperatureTable';
import DrawMap from './DrawMap';
import data from './data.json';


const Main = () => {

  return (
    <View style={{ flex: 1 }}>
      <DrawMap data={data} />
      <TemperatureTable data={data} />
    </View >
  );
};

export default Main;
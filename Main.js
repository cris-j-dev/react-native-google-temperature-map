import React, { Component, useState, useEffect } from 'react';
import {
  View,
} from 'react-native';

import data from './data.json';
import DrawMap from './DrawMap';
import TemperatureTable from './TemperatureTable';


// function Main() {
class Main extends Component {
  // const Main = () => {
  render() {

    return (
      <View style={{ flex: 1 }}>
        <DrawMap data={data} />
        <TemperatureTable data={data} />
      </View >
    );
  }
};


export default Main;


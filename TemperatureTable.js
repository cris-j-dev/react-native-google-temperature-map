import React, { useState, useEffect, Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,

} from 'react-native';

import BottomSheet from 'react-native-simple-bottom-sheet';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const TemperatureTable = (props) => {

  // const data = Object.entries(props.data.Data2).map(([key, val]) => ({
  //   [key]: val
  // }));
  console.log("data");
  // const data = Object.values(JSON.parse(string))
  const data = props.data.Data2.map(temp => Object.values(temp));
  console.log(data);

  return (
    <BottomSheet isOpen={false} >
      {(onScrollEndDrag) => (
        <ScrollView onScrollEndDrag={onScrollEndDrag}>

          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#ffa1d2' }}>
              <Row data={props.data.Header} style={styles.HeadStyle} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} />
              <Rows data={data} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} />
            </Table>
          </View>

        </ScrollView>
      )}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  HeadStyle: {
    flex: 1,
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

export default TemperatureTable;

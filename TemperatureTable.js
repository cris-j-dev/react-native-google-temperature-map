import React, { useState, useEffect, Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,

} from 'react-native';

import BottomSheet from 'react-native-simple-bottom-sheet';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: '한국어     ', value: 0 },
  { label: 'English', value: 1 }
];

const TemperatureTable = (props) => {

  const [value, setValue] = React.useState(0);
  // const data = Object.entries(props.data.Data2).map(([key, val]) => ({
  //   [key]: val
  // }));
  // const data = Object.values(JSON.parse(string))
  const data = props.data.Data2.map(temp => Object.values(temp));

  return (
    <BottomSheet isOpen={false} >
      {(onScrollEndDrag) => (
        <ScrollView onScrollEndDrag={onScrollEndDrag}>

          <View>
            <RadioForm style={styles.radio}
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              onPress={(value) => { setValue(value) }}
            />


            <Table borderStyle={{ borderWidth: 1, borderColor: '#045d99' }}>
              {/* <Row data={props.data.Header} style={styles.HeadStyle} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} /> */}
              {value === 0 ? <Row data={props.data.Header} style={styles.HeadStyle} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} /> :
                <Row data={props.data.Header2} style={styles.HeadStyle} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} />}
              {/* {value === 1 && <Row data={props.data.Header2} style={styles.HeadStyle} textStyle={styles.TextStyle} flexArr={[1, 4, 4, 1]} />} */}
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
    backgroundColor: '#F0F9FF'
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
  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // position: 'absolute',
    // width: 1000,
    // left: -60
  },
});

export default TemperatureTable;

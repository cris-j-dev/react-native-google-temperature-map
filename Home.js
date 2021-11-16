
import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
} from 'react-native';
// import { RadioButton, } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
  { label: '한국어     ', value: 0 },
  { label: 'English', value: 1 }
];

function Home(props) {
  const [value, setValue] = React.useState(0);

  // const Home = () => {
  // class Home extends Component {
  // render() {
  return (
    <View style={styles.container} >
      <Image source={require("./asset/KETI_CI_1.png")} style={styles.ci_1} />
      <Image source={require("./asset/KETI_CI_2.png")} style={styles.ci_2} />

      {/* <RadioForm style={styles.radio}
        radio_props={radio_props}
        initial={0}
        formHorizontal={true}
        onPress={(value) => { setValue(value) }}
      /> */}

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => { props.navigation.navigate("Main") }}>
        <Text style={styles.text}>Get Started</Text>
        {/* {value === 0 && <Text style={styles.text}>시         작</Text>}
        {value === 1 && <Text style={styles.text}>Get Started</Text>} */}
      </TouchableOpacity>
    </View >
  );
  // }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",

    /* light-blue/50 */
    backgroundColor: "#F0F9FF",
    // backgroundColor: '#EDB0B0',
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  ci_1: {
    position: 'absolute',
    width: 200,
    height: 100,
    top: (Dimensions.get('window').height - 200) / 2
  },
  ci_2: {
    position: 'absolute',
    width: 200,
    height: 33,
    top: (Dimensions.get('window').height - 33) / 2
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#045D99',
    paddingVertical: 13,
    paddingHorizontal: 33,

    position: 'absolute',
    width: 328,
    height: 50,
    top: (Dimensions.get('window').height - 150)
  },
  text: {
    color: 'white',
    fontSize: 16

  },
  radio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // position: 'absolute',
    // width: 1000,
    top: (Dimensions.get('window').height - 550),
    // left: -60
  },
  radioBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    // position: 'absolute',
    // width: 1000,
    top: (Dimensions.get('window').height - 550),
    // left: -60
  },
});

export default Home;

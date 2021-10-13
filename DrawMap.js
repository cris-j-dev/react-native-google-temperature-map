import React, { useState, useEffect, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,

} from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';


async function requestPermission() {
  try {
    if (Platform.OS === "ios") { return await Geolocation.requestAuthorization("always"); } // 안드로이드 위치 정보 수집 권한 요청 
    if (Platform.OS === "android") { return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,); }
  } catch (e) { console.log(e); }
}

const DrawMap = (props) => {
  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission()
      .then(result => {
        console.log({ result });
        if (result === "granted") {
          Geolocation.getCurrentPosition(
            pos => { setLocation(pos.coords); },
            error => { console.log(error); },
            { enableHighAccuracy: true, timeout: 3600, maximumAge: 3600, }
        ,);
        }
      });
  },
    []);

  if (!location) {
    return (
      <View>
        <Text>Splash screen</Text>
      </View>
    );
  }

  // console.log(props.data.Data2);

  var markers = [];
  var object_length = Object.keys(props.data.Data2).length;
  for (let i = 0; i < object_length; i++) {
    var image;
    var num = props.data.Data2[i]["num"]
    const index = props.data.Data2[i]["index"]
    if (num == 0) {
      image = require('./asset/icon-p00.png');
    }
    else if (num >= 1 && num < 5) {
      image = require('./asset/icon-p01.png');
    }
    else if (num >= 5 && num < 10) {
      image = require('./asset/icon-p02.png');
    }
    else if (num >= 10 && num < 50) {
      image = require('./asset/icon-p03.png');
    }
    else if (num >= 50 && num < 100) {
      image = require('./asset/icon-p04.png');
    }
    else if (num >= 100) {
      image = require('./asset/icon-p05.png');
    }

    markers.push(
      <Marker
        key={String(index)}
        coordinate={{ latitude: Number(props.data.Data2[i]["lat"]), longitude: Number(props.data.Data2[i]["lon"]) }}
        image={image}
        // title={props.data.Data2[i]["index"]}
        title={String(num)}
      // image={require(image)}
      ></Marker >
    )
  }

  console.log(markers);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          // latitude: location.latitude,
          // longitude: location.longitude,
          latitude: 37.411151,
          longitude: 127.128719,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {/* <Marker
          // key={1}
          coordinate={{ latitude: 37.411151, longitude: 127.128719 }}
          image={require('./asset/icon-p00.png')}
        >
        </Marker> */}
        {markers}
      </MapView>

    </View >
  );
};

export default DrawMap;

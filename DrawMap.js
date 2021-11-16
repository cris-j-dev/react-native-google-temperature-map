import React, { useState, useEffect, Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  Image,

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
  let timestamp = + new Date();
  // console.log(timestamp);
  const [location, setLocation] = useState();
  useEffect(() => {
    requestPermission()
      .then(result => {
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
        <Text>Loading ...</Text>
      </View>
    );
  }

  // console.log(props.data.Data2);

  let markers = [];
  let object_length = Object.keys(props.data.Data2).length;
  for (let i = 0; i < object_length; i++) {
    let image;
    let num = props.data.Data2[i]["num"]
    let title = String(props.data.Data2[i]["num"]) + "/" + String(props.data.Data2[i]["tot"])
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
        // image={image}
        // title={props.data.Data2[i]["index"]}
        title={title}
      // image={require(image)}
      >
        <Image source={image} style={{ width: 40, height: 40 }} resizeMode="contain" />
      </Marker >
    )
  }
  let timestamp_end = + new Date();
  var loading_time = timestamp_end - timestamp;
  if (loading_time < 100) {
    loading_time = 250 - loading_time;
  }

  console.log("Loading Time:" + (loading_time) + "ms");

  // console.log(markers);

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

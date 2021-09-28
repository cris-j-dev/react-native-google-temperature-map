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

  return (
    <View style={{ flex: 1 }}>
      { <MapView
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
        <Marker
          // key={1}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          image={require('./asset/icon-p00.png')}
        >
        </Marker>
      </MapView>}

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

export default DrawMap;

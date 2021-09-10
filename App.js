/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  onScrollEndDrag,
  Platform,
  PermissionsAndroid,

} from 'react-native';

import BottomSheet from 'react-native-simple-bottom-sheet';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';

const Container = Styled.View`
    flex: 1;
`;


async function requestPermission() {
  try {
    if (Platform.OS === "ios") { return await Geolocation.requestAuthorization("always"); } // 안드로이드 위치 정보 수집 권한 요청 
    if (Platform.OS === "android") { return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,); }
  } catch (e) { console.log(e); }
}


const App = () => {
  const [location, setLocation] = useState(); useEffect(() => { requestPermission().then(result => { console.log({ result }); if (result === "granted") { Geolocation.getCurrentPosition(pos => { setLocation(pos.coords); }, error => { console.log(error); }, { enableHighAccuracy: true, timeout: 3600, maximumAge: 3600, },); } }); }, []);

  if (!location) {
    return (
      <View>
        <Text>Splash screen</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Container>
        <MapView style={{ flex: 1 }} provider={PROVIDER_GOOGLE} initialRegion={{ latitude: location.latitude, longitude: location.longitude, latitudeDelta: 0.005, longitudeDelta: 0.005, }}></MapView>
      </Container>


      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            {[...Array(10)].map((_, index) => (
              <View key={`${index}`} style={styles.listItem}>
                <Text>{`List Item ${index + 1}`}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;

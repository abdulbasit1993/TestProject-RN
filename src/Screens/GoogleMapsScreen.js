import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

// lat: 24.861430225298722, long: 66.99970632519859

const initialRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const myRegion = {
  latitude: 24.861430225298722,
  longitude: 66.99970632519859,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const GoogleMapsScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={myRegion} />
    </View>
  );
};

export default GoogleMapsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Flexbox() {
  return (
    <>
      {/* <View style={{backgroundColor: '#7cb48f', flex: 1}}></View>
      <View style={{backgroundColor: '#7CA1B4', flex: 3}}></View> */}

      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7CA1B4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  square: {
    backgroundColor: '#7cb48f',
    width: 100,
    height: 100,
    margin: 4,
  },
});

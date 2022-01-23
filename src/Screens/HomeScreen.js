import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {COLORS} from '../utils/colors';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.menuItemView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Flexbox')}
          style={styles.menuBtn}>
          <Text style={styles.menuBtnText}>Flexbox Demo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menuItemView: {
    marginTop: 10,
  },
  menuBtn: {
    backgroundColor: COLORS.PRIMARY,
    width: deviceWidth * 0.9,
    height: deviceWidth * 0.14,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  menuBtnText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: 22,
  },
});

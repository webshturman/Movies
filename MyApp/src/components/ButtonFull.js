import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export const ButtonFull = ({text, callback}) => {
  return (
    <TouchableOpacity onPress={callback}>
      <View style={styles.button}>
        <View />
        <Text style={styles.textButton}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: 'rgb(52,114,245)',
    borderRadius: 2,
    padding: 10,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  textButton: {
    color: 'rgb(250,248,248)',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
    padding: 2,
  },
});

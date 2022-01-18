import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

export const ButtonItem = ({text, callback}) => {
  const styleButton =
    text === 'Sign in Facebook'
      ? {
          styles: styles.buttonFaceBook,
          styleText: styles.textButtonFaceBook,
          styleIcon: 'facebook',
          color: '#3f477c',
        }
      : {
          styles: styles.buttonGoogle,
          styleText: styles.textButtonGoogle,
          styleIcon: 'google',
          color: '#984a50',
        };
  return (
    <TouchableOpacity onPress={callback}>
      <View style={styleButton.styles}>
        <View style={styles.ButtonIcon}>
          <Icon
            name={styleButton.styleIcon}
            type="fontisto"
            color={styleButton.color}
          />
        </View>
        <Text style={styleButton.styleText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonFaceBook: {
    width: '100%',
    backgroundColor: 'rgba(87,128,232,0.2)',
    borderRadius: 2,
    padding: 10,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  buttonGoogle: {
    width: '100%',
    backgroundColor: 'rgb(248,194,200)',
    borderRadius: 2,
    padding: 10,
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    color: 'rgb(63,71,124)',
  },
  textButtonFaceBook: {
    color: 'rgb(63,71,124)',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '80%',
  },
  textButtonGoogle: {
    color: 'rgb(152,74,80)',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    width: '80%',
  },
  ButtonIcon: {
    height: '100%',
    width: '15%',
  },
});

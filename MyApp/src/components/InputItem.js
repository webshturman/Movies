import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';

export const InputItem = ({
  placeholder,
  keyboardType,
  value,
  setValue,
  secureTextEntry,
}) => {
  const handleInputValueChange = e => {
    setValue(e.trim());
  };
  return (
    <View style={styles.InputBlock}>
      <View style={styles.InputIcon}>
        <Icon name="people" type="ionicon" color="#c8c9c9" />
      </View>
      <TextInput
        style={styles.itemInput}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputValueChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemInput: {
    backgroundColor: 'rgb(255,255,255)',
    marginBottom: 20,
    borderRadius: 2,
    width: '85%',
    paddingLeft: 10,
  },
  InputIcon: {
    backgroundColor: 'rgb(255,255,255)',
    height: '70%',
    width: '15%',
    borderRightColor: 'rgb(239,239,239)',
    borderRightWidth: 4,
    paddingTop: 10,
  },
  InputBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
});

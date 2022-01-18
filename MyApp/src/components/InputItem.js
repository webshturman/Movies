import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export const InputItem = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  keyboardType,
  icon,
}) => {
  const handleInputValueChange = e => {
    setValue(e.trim());
  };
  return (
    <View style={styles.InputBlock}>
      <View style={styles.InputIcon}>
        <Image style={styles.itemIcon} source={icon}/>
      </View>
      <TextInput
        style={styles.itemInput}
        placeholder={placeholder}
        value={value}
        onChangeText={handleInputValueChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
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
    alignItems: 'center',
  },
  itemIcon:{
    height: 24,
    width: 24,
  },
  InputBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
});

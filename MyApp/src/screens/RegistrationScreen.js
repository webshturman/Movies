import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonFull} from '../components/ButtonFull';
import {ButtonItem} from '../components/ButtonItem';
import {InputItem} from '../components/InputItem';
import {InputPassword} from '../components/InputPassword';
import {createUser, onFacebookButtonPress, onGoogleButtonPress,} from '../firebase/functionsFireBase';

export const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <View style={styles.BlockLogin}>
      <Text style={styles.textPage}>Create an account</Text>
      <InputItem
        placeholder={'Name'}
        value={name}
        setValue={setName}
        keyboardType={'default'}
        secureTextEntry={false}
      />
      <InputItem
        placeholder={'Email'}
        value={email}
        setValue={setEmail}
        keyboardType={'email-address'}
        secureTextEntry={false}
      />
      <InputPassword
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <InputPassword
        placeholder={'Confirm-Password'}
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
        keyboardType={'default'}
        secureTextEntry={true}
      />
      <ButtonFull
        text={'Sign In'}
        callback={() => createUser(email, password)}
      />
      <ButtonItem text={'Sign in Facebook'} callback={onFacebookButtonPress} />
      <ButtonItem text={'Sign in Google'} callback={onGoogleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  textPage: {
    marginTop: 5,
    marginBottom: 60,
    color: 'rgb(90,97,169)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  BlockLogin: {
    margin: '5%',
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {InputItem} from '../components/InputItem';
import {ButtonItem} from '../components/ButtonItem';
import {ButtonFull} from '../components/ButtonFull';
import {InputPassword} from '../components/InputPassword';
import {
  onFacebookButtonPress,
  onGoogleButtonPress,
  toSignIn,
} from '../firebase/functionsFireBase';

export const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const img =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtJcwEBl0U82p3TdGhiX9vvJ-eUpgqEAd1w&usqp=CAU';
  return (
    <View style={styles.BlockLogin}>
      <View style={styles.blockImg}>
        <Image style={styles.startImg} source={{uri: img}} />
      </View>
      <Text style={styles.textPage}>Connect</Text>
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
      <ButtonFull text={'Sign In'} callback={() => toSignIn(email, password)} />
      <ButtonItem text={'Sign in Facebook'} callback={onFacebookButtonPress} />
      <ButtonItem text={'Sign in Google'} callback={onGoogleButtonPress} />
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.registerText}>
          Dont have an account?Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textPage: {
    marginTop: 10,
    marginBottom: 10,
    color: 'rgb(90,97,169)',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 30,
    color: 'rgb(90,97,169)',
    textAlign: 'center',
    fontSize: 16,
  },
  startImg: {
    width: '70%',
    height: 200,
  },
  blockImg: {
    width: '100%',
    paddingLeft: '20%',
    marginTop: 10,
  },
  BlockLogin: {
    margin: '5%',
  },
});

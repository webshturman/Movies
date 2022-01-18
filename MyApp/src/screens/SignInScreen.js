import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonItem} from '../components/ButtonItem';
import {ButtonFull} from '../components/ButtonFull';
import img from '../assets/images/images.png'
import {onFacebookButtonPress, onGoogleButtonPress, toSignIn,} from '../firebase/functionsFireBase';
import {AuthForm} from "../components/AuthForm";
import nameIcon from "../assets/icons/name.png";
import passIcon from "../assets/icons/pass.png";

export const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

    const loginFields = [
        {title:'Email', keyboardType:'email-address', secureTextEntry:false, value:email, setValue:setEmail, icon:nameIcon},
        {title:'Password', secureTextEntry:true, value:password, setValue:setPassword, icon:passIcon},
    ]
    const toLogin = () => {
        if(email && password){
            setError(false)
            toSignIn(email, password)
        } else{
            setError(true)
        }
    }

  return (
    <View style={styles.BlockLogin}>
      <View style={styles.blockImg}>
        <Image style={styles.startImg} source={img} />
      </View>
        <AuthForm formData={loginFields} formName={'Connect'} error={error}/>
      <ButtonFull text={'Sign In'} handleClick={toLogin} />
      <ButtonItem text={'Sign in Facebook'} handleClick={onFacebookButtonPress} />
      <ButtonItem text={'Sign in Google'} handleClick={onGoogleButtonPress} />
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.registerText}>
          Dont have an account?Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    textError: {
        color: 'red',
        marginBottom: 5,
        textAlign: 'center',
    },
  BlockLogin: {
    margin: '5%',
  },
});

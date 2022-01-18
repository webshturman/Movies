import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {ButtonFull} from '../components/ButtonFull';
import {ButtonItem} from '../components/ButtonItem';
import {createUser, onFacebookButtonPress, onGoogleButtonPress,} from '../firebase/functionsFireBase';
import {AuthForm} from "../components/AuthForm";
import nameIcon from '../assets/icons/name.png'
import passIcon from '../assets/icons/pass.png'

export const RegistrationScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(false);

    const registrationFields = [
        {title:'Name', secureTextEntry:false, value:name, setValue:setName, icon:nameIcon},
        {title:'Email', keyboardType:'email-address', secureTextEntry:false, value:email, setValue:setEmail, icon:nameIcon},
        {title:'Password', secureTextEntry:true, value:password, setValue:setPassword, icon:passIcon},
        {title:'Confirm Password', secureTextEntry:true,
            value:passwordConfirmation, setValue:setPasswordConfirmation, icon:passIcon},
    ]

    const toSignUp = () => {
        if (name && email && password && passwordConfirmation) {
            setError(false)
            createUser(email, password)
        } else{
            setError(true)
        }
    }

    return (
        <View style={styles.BlockLogin}>
            <AuthForm formData={registrationFields} formName={'Create an account'} error={error}/>
            <ButtonFull
                text={'Sign Up'}
                handleClick={toSignUp}
            />
            <ButtonItem text={'Sign in Facebook'} handleClick={onFacebookButtonPress}/>
            <ButtonItem text={'Sign in Google'} handleClick={onGoogleButtonPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    textError: {
        color: 'red',
        marginBottom: 5,
        textAlign: 'center',
    },
    BlockLogin: {
        margin: '5%',
    },
});

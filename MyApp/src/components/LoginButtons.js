import React from 'react';
import {ButtonItem} from "./ButtonItem";
import {AccessToken, LoginManager} from "react-native-fbsdk-next";
import auth from "@react-native-firebase/auth";
import {GoogleSignin} from "@react-native-google-signin/google-signin";

export const LoginButtons = ({signType, signAction}) => {
    const onFacebookButtonPress = async() => {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
        await auth().signInWithCredential(facebookCredential);
    }

    const onGoogleButtonPress = async () => {
        const {idToken} = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const userData = auth().signInWithCredential(googleCredential);
        userData.then((userMen) => {
            console.log(userMen)
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <>
            <ButtonItem text={signType} handleClick={signAction}/>
            <ButtonItem text={'Sign in Facebook'} handleClick={onFacebookButtonPress}/>
            <ButtonItem text={'Sign in Google'} handleClick={onGoogleButtonPress}/>
        </>
    );
};

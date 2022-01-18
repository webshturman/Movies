import React from 'react';
import {ButtonItem} from "./ButtonItem";
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {Button} from "react-native";

export const FacebookGoogleButtons = () => {
     // const onFacebookButtonPress = async() => {
     //     // Attempt login with permissions
     //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
     //
     //     if (result.isCancelled) {
     //         throw 'User cancelled the login process';
     //     }
     //
     //     // Once signed in, get the users AccesToken
     //     const data = await AccessToken.getCurrentAccessToken();
     //
     //     if (!data) {
     //         throw 'Something went wrong obtaining access token';
     //     }
     //
     //     // Create a Firebase credential with the AccessToken
     //     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
     //     console.warn(data.accessToken)
     //     // Sign-in the user with the credential
     //     return auth().signInWithCredential(facebookCredential);
    // }

    return (
        <>
            {/*<ButtonItem text={'Sign in Facebook'} title={'login facebook'} handleClick={onFacebookButtonPress}/>*/}
            {/*<Button*/}
            {/*    title="Facebook Sign-In"*/}
            {/*    onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}*/}
            {/*/>*/}
            <ButtonItem text={'Sign in Google'} title={'login google'}/>
        </>
    );
};


import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {ListFilmsScreen} from '../screens/ListFilmsScreen';
import {RegistrationScreen} from '../screens/RegistrationScreen';
import {SignInScreen} from '../screens/SignInScreen';
import {FilmItemScreen} from '../screens/FilmItemScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchInput} from './SearchInput';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {ButtonItem} from "./ButtonItem";

export const AppRoutes = () => {
    const Stack = createNativeStackNavigator();
    const titleForHeader = useSelector(state => state.app.titleForHeader);

    GoogleSignin.configure({
        webClientId:
            '495944347247-550nmpn3heqqltpv9oe984ct2asl71ra.apps.googleusercontent.com',
    });

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const toLogOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    };

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) {
        return <ActivityIndicator/>;
    }

    return (
        <>
            <ButtonItem text={'Logout'} title={'logout'} handleClick={toLogOut}/>
            <NavigationContainer>
                <Stack.Navigator>
                    {!user ? (
                        <>
                            <Stack.Screen
                                name="SignIn"
                                component={SignInScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Registration"
                                component={RegistrationScreen}
                                options={{headerShown: false}}
                            />
                        </>
                    ) : (
                        <>
                            <Stack.Screen
                                name="ListFilms"
                                component={ListFilmsScreen}
                                options={{
                                    headerTitle: props => <SearchInput {...props} />,
                                    headerStyle: {
                                        backgroundColor: '#24fae4',
                                    },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                    },
                                }}
                            />
                            <Stack.Screen
                                name="FilmItem"
                                component={FilmItemScreen}
                                options={{
                                    title: titleForHeader,
                                    headerStyle: {
                                        backgroundColor: '#24fae4',
                                    },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                        fontWeight: 'bold',
                                        fontSize: 30,
                                    },
                                }}
                            />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
};

const styles = StyleSheet.create({
    test: {
        backgroundColor: '#984a50',
        height: 10,
    },
});

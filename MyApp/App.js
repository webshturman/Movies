import type {Node} from 'react';
import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {AppRoutes} from './src/components/AppRoutes';

const App: () => Node = () => {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
};

export default App;


// import auth from '@react-native-firebase/auth';
// import React, {useEffect, useState} from 'react';
// import {StyleSheet} from 'react-native';
//
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import {ListFilmsScreen} from './src/screens/ListFilmsScreen';
// import {NavigationContainer} from '@react-navigation/native';
//
// import {SignInScreen} from './src/screens/SignInScreen';
// import {RegistrationScreen} from './src/screens/RegistrationScreen';
// import {FilmItemScreen} from './src/screens/FilmItemScreen';
// import {createNativeStackNavigator} from 'react-native-screens/native-stack';
// import {ButtonItem} from "./src/components/ButtonItem";
// import {GoogleSignin} from "@react-native-google-signin/google-signin";
//
// const App = () => {
//     const backgroundStyle = {
//         backgroundColor: Colors.lighter,
//         height: '100%',
//     };
//     GoogleSignin.configure({
//         webClientId: '495944347247-550nmpn3heqqltpv9oe984ct2asl71ra.apps.googleusercontent.com',
//     });
//     const Stack = createNativeStackNavigator();
//
//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();
//
//     const toLogOut = () => {
//         auth()
//             .signOut()
//             .then(() => console.log('User signed out!'));
//     }
//
//     function onAuthStateChanged(user) {
//         setUser(user);
//         if (initializing) setInitializing(false);
//     }
//
//     // if (initializing) return <Text>Create an account</Text>;
//
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber;
//     }, []);
//
//     return (
//         <>
//             <ButtonItem text={'Logout'} title={'logout'} handleClick={toLogOut}/>
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     {!user ? (
//                         <>
//                             <Stack.Screen name="SignIn" component={SignInScreen}/>
//                             <Stack.Screen name="Registration" component={RegistrationScreen}/>
//                         </>
//                     ) : (
//                         <>
//                             <Stack.Screen name="ListFilms" component={ListFilmsScreen}/>
//                             <Stack.Screen name="FilmItem" component={FilmItemScreen}/>
//                         </>
//                     )}
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </>
//     );
// };
//
// const styles = StyleSheet.create({
//     test: {
//         backgroundColor: 'red',
//         height: 10,
//     },
// });
//
// export default App;

import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {setFilmsAxiosAC} from '../redux/app-reducer';

export const SearchInput = () => {
    const [nameFilm, setNameFilm] = useState('');
    const dispatch = useDispatch();

    const setSearchValue = (event) => {
        setNameFilm(event)
    }

    return (
        <View style={styles.InputBlock}>
            <TextInput
                style={styles.itemInput}
                placeholder={'search...'}
                onChangeText={setSearchValue}
                value={nameFilm}
            />
            <TouchableOpacity
                style={styles.InputIcon}
                onPress={() => dispatch(setFilmsAxiosAC(nameFilm))}>
                <Icon name="search" type="ionicon" color="#fff"/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemInput: {
        backgroundColor: 'rgb(255,255,255)',
        marginBottom: 20,
        borderRadius: 30,
        width: '95%',
        paddingLeft: 10,
    },
    InputIcon: {
        position: 'absolute',
        marginLeft: '85%',
        borderRadius: 50,
        backgroundColor: 'rgb(3,3,3)',
        padding: 12,
    },
    InputBlock: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
    },
});

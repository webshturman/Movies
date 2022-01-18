import {Image, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setTitleForHeaderAC} from '../redux/app-reducer';

export const Film = ({film, onClickTodo}) => {
  const dispatch = useDispatch();
  const upperFilmName = film.show.name.toUpperCase();
  const baseImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtJcwEBl0U82p3TdGhiX9vvJ-eUpgqEAd1w&usqp=CAU'
  const avatar = film.show.image ? film.show.image.medium : baseImg
  return (
    <TouchableOpacity
      style={styles.FilmBlock}
      onPress={() => {
        onClickTodo(film);
        dispatch(setTitleForHeaderAC(film.show.name));
      }}>
      <View>
        <Image style={styles.filmImg} source={{uri: avatar}}/>
        <Text style={styles.filmName}>{upperFilmName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  FilmBlock: {
    width: '40%',
    margin: 20,
  },
  filmImg: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  filmName: {
    marginTop: 10,
    textAlign: 'center',
    color: 'rgb(52,53,68)',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

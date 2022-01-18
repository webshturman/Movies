import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ProfileFilm = ({film}) => {
  const upperFilmName = film.show.name.toUpperCase();
  const regex = /(&nbsp;|<([^>]+)>)/ig
  const summary = film.show.summary ? film.show.summary.replace(regex, '') : ''
  const baseImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtJcwEBl0U82p3TdGhiX9vvJ-eUpgqEAd1w&usqp=CAU'
  const avatar = film.show.image ? film.show.image.medium : baseImg
  return (
    <View>
      <View style={styles.BlockFilm}>
        <Image
          style={styles.filmProfileImg}
          source={{uri: avatar}}
        />
      </View>
      <Text style={styles.filmProfileName}>{upperFilmName}</Text>
      <Text style={styles.filmProfileDescription}>{summary}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  BlockFilm: {
    width: '100%',
    paddingLeft: '30%',
    marginTop: 10,
  },
  filmProfileImg: {
    width: '60%',
    height: 250,
    borderRadius: 10,
  },
  filmProfileName: {
    textAlign: 'center',
    color: 'rgb(52,53,68)',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 20,
  },
  filmProfileDescription: {
    textAlign: 'center',
    color: 'rgb(52,53,68)',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

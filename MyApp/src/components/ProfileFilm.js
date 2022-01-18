import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const ProfileFilm = ({film}) => {
  const upperFilmName = film.show.name.toUpperCase();
  return (
    <View>
      <View style={styles.BlockFilm}>
        <Image
          style={styles.filmProfileImg}
          source={{uri: film.show.image.medium}}
        />
      </View>
      <Text style={styles.filmProfileName}>{upperFilmName}</Text>
      <Text style={styles.filmProfileDescription}>{film.show.summary}</Text>
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

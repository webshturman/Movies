import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SearchInput} from '../components/SearchInput';
import {ProfileFilm} from '../components/ProfileFilm';

export const FilmItemScreen = ({route}) => {
  const film = route.params.film;
  return (
    <ScrollView>
      <View style={styles.BlockProfileFilms}>
        <ProfileFilm
          film={film}
          source={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtJcwEBl0U82p3TdGhiX9vvJ-eUpgqEAd1w&usqp=CAU'
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BlockProfileFilms: {
    margin: '5%',
  },
});

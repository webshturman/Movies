import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {ProfileFilm} from '../components/ProfileFilm';

export const FilmItemScreen = ({route}) => {
  const film = route.params.film;
  return (
    <ScrollView>
      <View style={styles.BlockProfileFilms}>
        <ProfileFilm
          film={film}
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

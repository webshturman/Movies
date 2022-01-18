import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Film} from '../components/Film';
import {useSelector} from 'react-redux';

export const ListFilmsScreen = ({navigation}) => {
  const films = useSelector(state => state.app.films);
  const loadingFilms = useSelector(state => state.app.loadingFilms);

    if(!films){
      return<View style={styles.BlockFilms}>Нет Фильмов</View>
    }

  return (
    <ScrollView>
      <View>
        {loadingFilms && <ActivityIndicator />}
        <View style={styles.BlockFilms}>
          {films.map(film => {
            return (
              <Film
                key={film.show.id}
                film={film}
                onClickTodo={film => navigation.navigate('FilmItem', {film})}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BlockFilms: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

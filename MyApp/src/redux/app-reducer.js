import {FilmApi} from './api';
import {put, call} from 'redux-saga/effects';

const initialState = {
  films: [],
  loadingFilms: false,
  titleForHeader: '',
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP/SET-APP-LOADING':
      return {...state, loadingFilms: action.loadingFilms};
    case 'APP/SET-APP-DATA':
      return {...state, films: action.films};
    case 'APP/SET-TITlE-FOR-HEADER':
      return {...state, titleForHeader: action.titleForHeader};
    default:
      return state;
  }
};

export const setTitleForHeaderAC = titleForHeader => ({
  type: 'APP/SET-TITlE-FOR-HEADER',
  titleForHeader,
});

export const setLoadingFilmsAC = loadingFilms => ({
  type: 'APP/SET-APP-LOADING',
  loadingFilms,
});

export const setFilmsAC = films => ({
  type: 'APP/SET-APP-DATA',
  films,
});

export function* setFilmsWorkerSaga(action) {
  yield put(setLoadingFilmsAC(true));
  const res = yield call(FilmApi.getFilm, action.params);
  yield put(setFilmsAC(res.data));
  yield put(setLoadingFilmsAC(false));
}

export const setFilmsAxiosAC = params => ({
  type: 'APP/SET-FILMS-DATA',
  params,
});

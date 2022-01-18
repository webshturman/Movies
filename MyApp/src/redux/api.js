import axios from 'axios';

export const FilmApi = {
  getFilm(params) {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${params}`);
  },
};

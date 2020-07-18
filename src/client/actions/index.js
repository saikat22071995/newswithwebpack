import axios from 'axios';
import config from '../../../config';

export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => async dispatch => {
  let url;
  if (source) {
    url = `http://dct-cors.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${config.apikey}`;
  } else {
    url = `http://dct-cors.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apikey}`;
  }

  const res = await axios.get(url);

  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data.articles
  });
};

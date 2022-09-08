import {useEffect} from 'react'
import axios from 'axios';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const getMovies = (API) => {
    axios.get(API)
          .then((res) => console.log(res.data.results))
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])


  return (
    <div>Main</div>
  )
}

export default Main

//PAGINATION ?? FOR MORE PAGES??
import {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import { AuthContext } from '../context/AuthContext';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const  [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const {currentUser} = useContext(AuthContext);



  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => {setMovies(res.data.results); console.log(res.data.results)})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchTerm){
      alert("Please enter a text")
    }else{
    getMovies(SEARCH_API + searchTerm)}
  };


  return (
    <>
    {currentUser && 
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
}

    <div className="d-flex justify-content-center flex-wrap">
      {
        movies.map(movie => (
          <MovieCard key={movie.id} {...movie}/>
        ))
      }

    </div>
    </>
  )
}

export default Main
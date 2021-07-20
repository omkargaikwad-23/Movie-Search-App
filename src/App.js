import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import SearchQuery from "./components/SearchQuery";

const App = () => {
  const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5c3a481e`

    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }else{
      console.log("no results found...");
    }
  };


  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div className='container-fluid movie-app'>
      
      <div className='row m-md-4 m-2'>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} heading="Movies"/>
      </div>
      
      <div className='row m-2 mx-4'>
        <SearchQuery inputString={searchValue}/>
      </div>
      
      <div className='movie-list'>    
        <MovieList movies={movies} />
      </div>
    
    </div>
  );
};

export default App;

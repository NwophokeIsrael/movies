// src/App.js
import React, { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import Filter from './Filter';
import assassin from './Media/assassin.jpg';
import blackbook from './Media/blackbook.jpg';
import extraction from './Media/extraction.jpg';
import kingofboys from './Media/kingofboys.jpg';
import kingofkillers from './Media/kingofkillers.jpeg';
import muzzle from './Media/muzzle.jpg'

function App() {
  const [movies, setMovies] = useState([
    // Initial movie data
    {
      title: 'Assassin',
      description: 'A South Korean historical action-drama film.',
      posterURL: assassin,
      rating: 4.0,
    },
    {
      title: 'Black book',
      description: 'The black book is a Nigerian thriller film produced and directed by Editi Effiong and starred prominent nollywood actors like Richard Mofe-Damijo, Sam Dede, Shaffy Bello.',
      posterURL: blackbook,
      rating: 5.1,
    },
    {
      title: 'King of Boys',
      description: 'King of Boys is a 2018 Nigerian crime political thriller film writen, co-produced and directed by Kemi Adetiba.',
      posterURL: kingofboys,
      rating: 4.8,
    },
    {
      title: 'Extraction',
      description: 'An American action thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks.',
      posterURL: extraction,
      rating: 5.0,
    },
    {
      title: 'King of Killers',
      description: 'This is an action thriller film from the writer-director Kevin Grevioux.',
      posterURL: kingofkillers,
      rating: 4.8,
    },
    {
      title: 'Muzzle',
      description: 'A Los Angeles police officer and his K-9partner try to uncover a vast cospiracy that has a chokehold on the city.',
      posterURL: muzzle,
      rating: 4.7,
    },
    // Add more movies here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleFilterChange = (value, type) => {
    if (type === 'title') {
      setTitleFilter(value);
    } else if (type === 'rating') {
      setRatingFilter(value);
    }
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Movie App</h1>
        <div className="filter-button">
        <Filter
          handleFilterChange={handleFilterChange}
          titleFilter={titleFilter}
          ratingFilter={ratingFilter}
          />
        <button className='button'
          onClick={() => addMovie({ title: 'New Movie', description: '', posterURL: '', rating: 0 })}
          >
          Add Movie
        </button>
          </div>
      </div>
      <MovieList
        movies={movies.filter((movie) =>
          movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
          movie.rating >= ratingFilter
        )}
      />
    </div>
  );
}

export default App;
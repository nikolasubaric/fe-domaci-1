import classes from './FindMovie.module.css';
import MovieCard from '../MovieCard/MovieCard';
import { useState, useRef } from 'react';
import { getMoviesByQuery } from '../../api/movies';

const FindMovie = () => {
  const [hasMovies, setHasMovies] = useState(false);
  const [movies, setMovies] = useState();
  const queryInputRef = useRef();

  const formSubmissionHandler = event => {
    event.preventDefault();
    setHasMovies(false);
    const queryMovies = getMoviesByQuery(queryInputRef.current.value);
    if (queryMovies.length !== 0) {
      setMovies(queryMovies);
      setHasMovies(true);
    }
  };

  const generateMovies = movies => {
    return movies.map((movie, index) => {
      const { name, year, genre, actors, image } = movie;

      return (
        <MovieCard
          key={index}
          name={name}
          year={year}
          genre={genre}
          image={image}
          actors={actors}
        />
      );
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={formSubmissionHandler}>
          <div className={classes.form}>
            <label className={classes.inputLabel}>Search movie:</label>
            <input
              className={classes.inputField}
              type='text'
              placeholder='Movie name...'
              ref={queryInputRef}
            />
          </div>
          <div className={classes.form}>
            <button className={classes.submitBtn}>Submit</button>
          </div>
        </form>
      </div>
      <div className={classes.foundMovies}>
        {hasMovies ? (
          generateMovies(movies)
        ) : (
          <p className={classes.noMovies}>No movies found...</p>
        )}
      </div>
    </div>
  );
};

export default FindMovie;

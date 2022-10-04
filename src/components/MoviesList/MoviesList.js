import MovieCard from '../MovieCard/MovieCard';
import { movies } from '../../data/movies';
import classes from './MoviesList.module.css';

const MoviesList = () => {
  return (
    <div className={classes.moviesList}>
      {movies.map((movie, index) => {
        const { name, year, image, genre, actors } = movie;
        return (
          <MovieCard
            key={index}
            name={name}
            year={year}
            image={image}
            genre={genre}
            actors={actors}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;

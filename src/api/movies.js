import { movies } from '../data/movies';

export const getTotalNumOfMovies = () => {
  return movies.length;
};

export const getNumOfMoviesOfGenre = genre => {
  return movies.filter(
    movie => movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase()
  ).length;
};

export const getNumOfMoviesFromYear = year => {
  return movies.filter(movie => movie.year === year).length;
};

export const getMoviesFromYearRange = (start, end) => {
  return movies.filter(movie => movie.year >= start && movie.year <= end);
};

export const getMoviesOfGenreOnFromYear = (genre, year) => {
  return movies.filter(
    movie =>
      movie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase() &&
      movie.year >= year
  );
};

export const getLastMovieOfYear = year => {
  return movies.findLast(movie => movie.year === year);
};

export const getCoverImagesOfActor = actor => {
  return movies
    .filter(movie =>
      movie.actors.find(
        curActor => curActor.toLocaleLowerCase() === actor.toLocaleLowerCase()
      )
    )
    .map(movie => movie.image);
};

export const getMoviesByQuery = query => {
  return movies.filter(movie =>
    movie.name.toLowerCase().includes(query.toLocaleLowerCase())
  );
};

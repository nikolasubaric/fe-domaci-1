import classes from './MoviesStatistics.module.css';
import * as movieFunctions from '../../api/movies';
import PreviewMovieCard from '../PreviewMovieCard/PreviewMovieCard';
import Statistic from '../Statistic/Statistic';

const MovieStatistics = () => {
  return (
    <div className={classes.statisticsList}>
      <Statistic heading='Total number of movies:'>
        <p className={classes.statValue}>
          {movieFunctions.getTotalNumOfMovies()}
        </p>
      </Statistic>

      <Statistic heading='Number of comedy movies:'>
        <p className={classes.statValue}>
          {movieFunctions.getNumOfMoviesOfGenre('comedy')}
        </p>
      </Statistic>

      <Statistic heading='Number of movies from 2012:'>
        <p className={classes.statValue}>
          {movieFunctions.getNumOfMoviesFromYear(2012)}
        </p>
      </Statistic>

      <Statistic heading='Movies from 1990 to 1999:' column={true}>
        <ul>
          {movieFunctions
            .getMoviesFromYearRange(1990, 1999)
            .map((movie, index) => {
              return (
                <li className={classes.listItem} key={index}>
                  {movie.name}
                </li>
              );
            })}
        </ul>
      </Statistic>

      <Statistic heading='Drama movies from 2000 onwards:' column={true}>
        <ul>
          {movieFunctions
            .getMoviesOfGenreOnFromYear('drama', 2000)
            .map((movie, index) => {
              return (
                <li className={classes.listItem} key={index}>
                  {movie.name}
                </li>
              );
            })}
        </ul>
      </Statistic>

      <Statistic heading='Last movie from list from 2010:'>
        <p className={classes.statValue}>
          {movieFunctions.getLastMovieOfYear(2010).name}
        </p>
      </Statistic>

      <Statistic heading='All movie covers starring Leonardo DiCaprio:' column>
        <div className={classes.movieCards}>
          {movieFunctions
            .getCoverImagesOfActor('leonardo dicaprio')
            .map((image, index) => (
              <PreviewMovieCard key={index} image={image} />
            ))}
        </div>
      </Statistic>
    </div>
  );
};

export default MovieStatistics;

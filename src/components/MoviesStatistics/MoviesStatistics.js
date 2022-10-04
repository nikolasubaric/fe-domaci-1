import classes from './MoviesStatistics.module.css';
import * as movieFunctions from '../../api/movies';
import PreviewMovieCard from '../PreviewMovieCard/PreviewMovieCard';

const MovieStatistics = () => {
  return (
    <div className={classes.statisticsList}>
      <div className={classes.statistic}>
        <p className={classes.statHeading}>Total number of movies:</p>
        <p className={classes.statValue}>
          {movieFunctions.getTotalNumOfMovies()}
        </p>
      </div>
      <div className={classes.statistic}>
        <p className={classes.statHeading}>Number of comedy movies:</p>
        <p className={classes.statValue}>
          {movieFunctions.getNumOfMoviesOfGenre('comedy')}
        </p>
      </div>
      <div className={classes.statistic}>
        <p className={classes.statHeading}>Number of movies from 2012:</p>
        <p className={classes.statValue}>
          {movieFunctions.getNumOfMoviesFromYear(2012)}
        </p>
      </div>
      <div className={`${classes.statistic}  ${classes.column}`}>
        <p className={classes.statHeading}>Movies from 1990 to 1999:</p>
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
      </div>
      <div className={`${classes.statistic}  ${classes.column}`}>
        <p className={classes.statHeading}>Drama movies from 2000 onwards:</p>
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
      </div>
      <div className={classes.statistic}>
        <p className={classes.statHeading}>Last movie from list from 2010:</p>
        <p className={classes.statValue}>
          {movieFunctions.getLastMovieOfYear(2010).name}
        </p>
      </div>
      <div
        className={`${classes.statistic}  ${classes.column} ${classes.movieStarring}`}
      >
        <p className={classes.statHeading}>
          All movie covers starring Leonardo DiCaprio:
        </p>
        <div className={classes.movieCards}>
          {movieFunctions
            .getCoverImagesOfActor('leonardo dicaprio')
            .map((image, index) => (
              <PreviewMovieCard image={image} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieStatistics;

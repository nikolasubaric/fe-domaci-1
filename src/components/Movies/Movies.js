import MoviesList from '../MoviesList/MoviesList';
import MoviesStatistics from '../MoviesStatistics/MoviesStatistics';
import FindMovie from '../FIndMovie/FindMovie';

import classes from './Movies.module.css';
import { useReducer, Fragment } from 'react';

const pageReducer = (state, action) => {
  if (action.type === 'LIST') {
    return { onMoviesList: true, onStatistics: false, onFindMovie: false };
  }
  if (action.type === 'STATS') {
    return { onMoviesList: false, onStatistics: true, onFindMovie: false };
  }
  if (action.type === 'SEARCH') {
    return { onMoviesList: false, onStatistics: false, onFindMovie: true };
  }
  return { onMoviesList: true, onStatistics: false, onFindMovie: false };
};

const Movies = () => {
  const [pageState, dispatchState] = useReducer(pageReducer, {
    onMoviesList: true,
    onStatistics: false,
    onFindMovie: false,
  });

  const listHandler = () => {
    dispatchState({ type: 'LIST' });
  };
  const statsHandler = () => {
    dispatchState({ type: 'STATS' });
  };
  const searchHandler = () => {
    dispatchState({ type: 'SEARCH' });
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <button className={`${classes.pageBtn}`} onClick={listHandler}>
          LIST
        </button>
        <button className={`${classes.pageBtn}`} onClick={statsHandler}>
          STATISTICS
        </button>
        <button className={`${classes.pageBtn}`} onClick={searchHandler}>
          SEARCH
        </button>
      </div>
      {pageState.onMoviesList && <MoviesList />}
      {pageState.onStatistics && <MoviesStatistics />}
      {pageState.onFindMovie && <FindMovie />}
    </Fragment>
  );
};

export default Movies;

import MoviesList from '../MoviesList/MoviesList';
import MoviesStatistics from '../MoviesStatistics/MoviesStatistics';
import FindMovie from '../FIndMovie/FindMovie';
import Container from '../Container/Container';

import classes from './Movies.module.css';
import { Fragment, useState } from 'react';

const Movies = () => {
  const [page, setPage] = useState('list');

  const listHandler = () => {
    setPage('list');
  };
  const statsHandler = () => {
    setPage('stats');
  };
  const searchHandler = () => {
    setPage('search');
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <button
          className={`${classes.pageBtn} ${
            page === 'list' ? classes.active : ''
          }`}
          onClick={listHandler}
        >
          LIST
        </button>
        <button
          className={`${classes.pageBtn} ${page === 'stats' && classes.active}`}
          onClick={statsHandler}
        >
          STATISTICS
        </button>
        <button
          className={`${classes.pageBtn} ${
            page === 'search' && classes.active
          }`}
          onClick={searchHandler}
        >
          SEARCH
        </button>
      </div>
      <Container>
        {page === 'list' && <MoviesList />}
        {page === 'stats' && <MoviesStatistics />}
        {page === 'search' && <FindMovie />}
      </Container>
    </Fragment>
  );
};

export default Movies;

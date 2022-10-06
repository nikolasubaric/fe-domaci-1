import MoviesList from '../MoviesList/MoviesList';
import MoviesStatistics from '../MoviesStatistics/MoviesStatistics';
import FindMovie from '../FIndMovie/FindMovie';
import Container from '../Container/Container';

import classes from './Movies.module.css';
import { Fragment, useState } from 'react';
import clsx from 'clsx';

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
          className={clsx(classes.pageBtn, {
            [classes.active]: page === 'list',
          })}
          onClick={listHandler}
        >
          LIST
        </button>
        <button
          className={clsx(classes.pageBtn, {
            [classes.active]: page === 'stats',
          })}
          onClick={statsHandler}
        >
          STATISTICS
        </button>
        <button
          className={clsx(classes.pageBtn, {
            [classes.active]: page === 'search',
          })}
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

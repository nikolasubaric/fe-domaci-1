import classes from './MoviesCard.module.css';

const MovieCard = ({ name, year, genre, image, actors }) => {
  return (
    <div
      className={classes.movieCard}
      style={{
        backgroundImage: `linear-gradient(0deg, #000 5%, rgba(0, 0, 0, 0)90%), url(${image})`,
      }}
    >
      <p className={classes.title}>{name}</p>
      <p className={classes.year}>{year}</p>
      <p className={classes.genre}>{genre}</p>
      <p className={classes.starring}>Starring</p>
      <ul>
        {actors.map(actor => {
          return <li className={classes.actor}>{actor}</li>;
        })}
      </ul>
    </div>
  );
};

export default MovieCard;

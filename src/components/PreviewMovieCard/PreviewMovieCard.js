import classes from './PreviewMovieCard.module.css';

const PreviewMovieCard = ({ image }) => {
  return (
    <div
      className={classes.preview}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default PreviewMovieCard;

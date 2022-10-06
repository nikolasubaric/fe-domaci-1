import classes from './Statistic.module.css';
import clsx from 'clsx';

const Statistic = ({ heading, column = false, children }) => {
  return (
    <div className={clsx(classes.statistic, { [classes.column]: column })}>
      <p className={classes.statHeading}>{heading}</p>
      {children}
    </div>
  );
};

export default Statistic;

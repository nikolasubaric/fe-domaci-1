import classes from './Header.module.css';
import clsx from 'clsx';

const Header = ({ buttons, page }) => {
  <div className={classes.header}>
    {buttons.map((button, index) => {
      return (
        <button
          className={clsx(classes.pageBtn, {
            [classes.active]: page === 'list',
          })}
          onClick={button.onClick}
          key={index}
        >
          {button.text}
        </button>
      );
    })}
  </div>;
};

export default Header;

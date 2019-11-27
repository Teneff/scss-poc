import classes from './styles.scss';

export const eventHandler = event => {
  console.info(classes);
  event.target.classList.add(classes.button);
};
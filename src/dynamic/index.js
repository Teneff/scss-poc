import classes from './styles.scss';

export const eventHandler = event => {
  event.target.classList.add('button');
  console.info('hello', event.target);
};
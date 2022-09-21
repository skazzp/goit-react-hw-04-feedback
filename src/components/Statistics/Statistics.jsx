import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.box}>
      <p className={css.stat}>Good: {good}</p>
      <p className={css.stat}>Neutral: {neutral}</p>
      <p className={css.stat}>Bad: {bad}</p>
      <p className={css.stat}>Total: {total}</p>
      <p className={css.stat}>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.text}>
    <p className={styles.textGood}>Good:{good}</p>
    <p className={styles.textNeutral}>Neutral:{neutral}</p>
    <p className={styles.textBad}>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p className={styles.positive}>Positive feedback:{positivePercentage} %</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

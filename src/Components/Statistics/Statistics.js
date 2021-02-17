import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive feedback:{positivePercentage} %</p>
  </div>
);

Statistics.propTypes = {};

export default Statistics;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistics from './Components/Statistics/Statistics';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Notification from './Components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonValue = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  // handleButtonValue = option => {
  //   this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  // };

  // handleButtonValue = () => {
  //   this.setState(state => ({
  //     [option]: state[option] + 1,
  //   }));
  // };

  countTotalFeedback() {
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
    );
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.trunc((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const posPerc = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Leave your feedback'} />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleButtonValue}
        />
        <Section />

        <Section title={'Statistics'} />
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={posPerc}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
        <Section />
      </>
    );
  }
}

App.propTypes = {};

export default App;

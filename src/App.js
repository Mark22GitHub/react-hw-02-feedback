import React, { Component } from 'react';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonValue = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

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
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title={'Leave your feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonValue}
          />
        </Section>

        <Section title={'Statistics'}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;

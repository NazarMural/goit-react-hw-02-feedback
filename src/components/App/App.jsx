import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import { Container } from './App.styled';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.floor((good * 100) / (good + neutral + bad));
  };

  onLeaveFeedback = value => {
    this.setState({ [value]: this.state[value] + 1 });
  };

  removeStatistics = () => {
    this.setState(state => ({
      good: (state.good = 0),
      neutral: (state.neutral = 0),
      bad: (state.bad = 0),
    }));
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              removeStatistics={this.removeStatistics}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

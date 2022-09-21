import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    let total = Object.values(this.state).reduce((sum, elem) => {
      return sum + elem;
    }, 0);
    return total;
  }
  countPositiveFeedbackPercentage() {
    let total = this.countTotalFeedback();
    let positive = Math.round((this.state.good / total) * 100);
    return positive;
  }

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  render() {
    let total = this.countTotalFeedback();
    let positive = this.countPositiveFeedbackPercentage() || 0;
    let options = Object.keys(this.state);
    return (
      <main>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {total ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </main>
    );
  }
}

import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Section from './Section/Section';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    let positive = Math.round((good / total) * 100);
    return positive;
  };

  const onLeaveFeedback = name => {
    if (name === 'good')
      setGood(prevState => {
        return prevState + 1;
      });
    if (name === 'neutral')
      setNeutral(prevState => {
        return prevState + 1;
      });
    if (name === 'bad')
      setBad(prevState => {
        return prevState + 1;
      });
  };

  let total = countTotalFeedback();
  let positive = countPositiveFeedbackPercentage() || 0;
  let options = ['good', 'neutral', 'bad'];
  return (
    <main>
      <Section title="Please Leave Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {total ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </main>
  );
};
export default App;

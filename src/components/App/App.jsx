import  {useState} from "react";
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import css from './App.module.css';


const App = () => {
  const buttonsFeedback = ['good', 'neutral', 'bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendlerClick = typeButtom => {
    switch (typeButtom) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        console.log('Error type');
    }
  };

  const total = good + neutral + bad;
  const countPositiveFeedback = total
  ? Math.round((good / total) * 100)
  : 0;

  return (
    <div className={css.container}>
          <div className={css.wrapper}>
              <Section title="Please leave feedback">
                <FeedbackOptions
                  options={buttonsFeedback}
                  onLeaveFeedback={hendlerClick}
                />
              </Section>
    
              <Section title="Statistics">
                {total > 0 ? (
                  <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={total}
                    positivePercentage={countPositiveFeedback}
                  />
                ) : (
                  <Notification message="There is no feedback" />
                )}
              </Section>
            </div>
          </div>
  );
};

export default App;
 















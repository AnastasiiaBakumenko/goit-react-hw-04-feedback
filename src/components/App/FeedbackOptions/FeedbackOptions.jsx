import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.list}>
      {options.map(typeButton => (
        <li className={css.item} key={typeButton}>
          <button
            className={css.button}
            type="button"
            name={typeButton}
            onClick={()=>onLeaveFeedback(typeButton)}
          >
            {typeButton}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
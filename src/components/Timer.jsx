
import PropTypes from 'prop-types'

const Timer = ({ timeLeft }) => {
  return (
    <div className="timer">
      Time Left: {timeLeft}s
    </div>
  );
};


Timer.propTypes = {
    timeLeft : PropTypes.number
}
export default Timer;

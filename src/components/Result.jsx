import PropTypes from 'prop-types';


const Result = ({ result, onRestart }) => {
  return (
    <div className='result'>
      <p>{result}</p>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.string,
  onRestart: PropTypes.string
};
export default Result;

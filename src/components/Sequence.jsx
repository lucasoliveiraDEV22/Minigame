import PropTypes from 'prop-types';


const Sequence = ({ sequence, currentIndex }) => {
  return (
    <div className='sequence'>
      {sequence.map((char, index) => (
        <span key={index} className={index === currentIndex ? 'active' : ''}>
          {char}
        </span>
      ))}
    </div>
  );
};

Sequence.propTypes = {
  sequence: PropTypes.node,
  currentIndex: PropTypes.number
};

export default Sequence;

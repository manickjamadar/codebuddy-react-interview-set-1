import PropTypes from "prop-types";
const SeatBox = ({ num, isReserved, isSelected, onClick, id }) => {
  return (
    <button
      className="seat-box"
      data-seatid={id}
      data-selected={isSelected}
      disabled={isReserved}
      onClick={onClick}
    >
      {num}
    </button>
  );
};
SeatBox.propTypes = {
  num: PropTypes.number,
  isReserved: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired,
};
SeatBox.defaultProps = {
  isReserved: false,
  isSelected: false,
};
export default SeatBox;

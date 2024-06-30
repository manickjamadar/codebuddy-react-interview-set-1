import SeatBox from "./SeatBox";
import PropTypes from "prop-types";
const SeatsRenderer = ({ rowSeatsList, onSeatClick, isSeatSelected }) => {
  const handleClick = (event) => {
    const clickedSeatId = event.target.getAttribute("data-seatid");
    clickedSeatId && onSeatClick && onSeatClick(clickedSeatId);
  };
  return (
    <div className="rounded bg-white p-6 shadow-lg">
      <div onClick={handleClick} className="flex flex-col items-center justify-center gap-2">
        {rowSeatsList.length > 0 ? (
          rowSeatsList.map((row) => (
            <div key={row.id} className="flex gap-2">
              {row.seats.map((seat) => (
                <SeatBox
                  id={seat.id}
                  key={seat.id}
                  num={seat.seatNumber}
                  isReserved={seat.isReserved}
                  isSelected={isSeatSelected ? isSeatSelected(seat.id) : false}
                />
              ))}
            </div>
          ))
        ) : (
          <p>No Seats Available</p>
        )}
      </div>
    </div>
  );
};
SeatsRenderer.propTypes = {
  rowSeatsList: PropTypes.arrayOf(PropTypes.object),
  onSeatClick: PropTypes.func,
  isSeatSelected: PropTypes.func,
};
SeatsRenderer.defaultProps = {
  rowSeatsList: [],
};
export default SeatsRenderer;

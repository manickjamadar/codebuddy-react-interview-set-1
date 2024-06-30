import SeatBox from "./SeatBox";
import PropTypes from "prop-types";
const SeatsRenderer = ({ rowSeatsList, onSeatClick, isSeatSelected }) => {
  const handleClick = (event) => {
    const clickedSeatId = event.target.getAttribute("data-seatid");
    clickedSeatId && onSeatClick && onSeatClick(clickedSeatId);
  };
  return (
    <div className="mx-auto max-w-md rounded bg-white p-6 shadow-lg">
      <div className="mb-4 flex flex-col gap-4 border-b pb-4">
        <h1 className="text-center text-xl font-bold capitalize text-gray-600">Choose your seat</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <SeatBox id="reserved" isReserved={true} />
            <p className="text-sm font-medium italic text-gray-500">Reserved</p>
          </div>
          <div className="flex items-center gap-2">
            <SeatBox id="available" />
            <p className="text-sm font-medium italic text-gray-500">Available</p>
          </div>
          <div className="flex items-center gap-2">
            <SeatBox id="reserved" isSelected={true} />
            <p className="text-sm font-medium italic text-gray-500">Selected</p>
          </div>
        </div>
      </div>
      <div
        onClick={handleClick}
        className="flex flex-col items-center justify-center gap-2 p-2 pb-6"
      >
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
          <p className="text-gray-400">No Seats Available</p>
        )}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="/theater-screen.png" alt="theater screen" />
        <p className="text-sm">All eyes this way please!</p>
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

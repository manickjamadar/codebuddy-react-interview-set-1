import PropTypes from "prop-types";
const TotalCostViewer = ({ cost }) => {
  return (
    <div className="fixed bottom-0 left-1/2 z-50 min-w-[222px] -translate-x-1/2 rounded-t-md bg-white px-8 py-4">
      <p className="text-center text-xl font-medium text-gray-800">
        Total Cost: <span className="text-green-600">${cost}</span>
      </p>
    </div>
  );
};
TotalCostViewer.propTypes = {
  cost: PropTypes.number,
};
export default TotalCostViewer;

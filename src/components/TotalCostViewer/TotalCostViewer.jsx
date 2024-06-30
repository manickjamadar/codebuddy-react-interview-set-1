import PropTypes from "prop-types";
const TotalCostViewer = ({ cost }) => {
  return (
    <p className="text-sm font-medium italic">
      Total Cost: <span className="text-green-700">${cost}</span>
    </p>
  );
};
TotalCostViewer.propTypes = {
  cost: PropTypes.number,
};
export default TotalCostViewer;

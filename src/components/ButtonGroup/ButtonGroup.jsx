import PropTypes from "prop-types";
const ButtonGroup = ({ config }) => {
  return (
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      {config.map(({ label, name, disabled, onClick, type }) => (
        <button
          key={name}
          disabled={disabled}
          onClick={onClick}
          type={type || "button"}
          className="base-button"
          name={name}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
// Example
// config: [{
//   label:string,
//   name:string,
//   disabled: boolean,
//   onClick: func,
//   type:string
// }]
ButtonGroup.propTypes = {
  config: PropTypes.arrayOf(PropTypes.object),
};
export default ButtonGroup;

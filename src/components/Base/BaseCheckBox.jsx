import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
const BaseCheckbox = (props) => {
  const { showError, errorMessage, className, id, label, value, onChange, ...rest } = props;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          id={id}
          className={cn(className, "base-checkbox")}
          type={"checkbox"}
          checked={value}
          onChange={onChange}
          {...rest}
        />
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
      </div>
      {showError && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};
BaseCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
BaseCheckbox.defaultProps = {
  showError: false,
  errorMessage: "",
  className: "",
};
export default BaseCheckbox;

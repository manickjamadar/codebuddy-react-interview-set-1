import PropTypes from "prop-types";
import { cn } from "../../utils/cn";
const BaseInput = (props) => {
  const {
    showError,
    errorMessage,
    className,
    id,
    label,
    placeholder,
    type,
    value,
    onChange,
    ...rest
  } = props;
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="base-input-label">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(className, "base-input")}
        data-error={showError}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {showError && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};
BaseInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
BaseInput.defaultProps = {
  showError: false,
  errorMessage: "",
  className: "",
  type: "text",
};
export default BaseInput;

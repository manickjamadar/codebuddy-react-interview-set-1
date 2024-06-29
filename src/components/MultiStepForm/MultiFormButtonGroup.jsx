import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { multiFormButtonNames } from "../../config/constants";
import PropTypes from "prop-types";
const MultiFormButtonGroup = (props) => {
  const { onBack, onSave, onSaveAndNext, isBackDisabled, isSaveDisabled, isSaveAndNextDisabled } =
    props;
  const buttonsConfig = [
    {
      name: multiFormButtonNames.back,
      disabled: isBackDisabled,
      onClick: onBack,
      type: "button",
      label: "Back",
    },
    {
      name: multiFormButtonNames.save,
      disabled: isSaveDisabled,
      onClick: onSave,
      type: "submit",
      label: "Save",
    },
    {
      name: multiFormButtonNames.saveAndNext,
      disabled: isSaveAndNextDisabled,
      onClick: onSaveAndNext,
      type: "submit",
      label: "Save and Next",
    },
  ];
  return <ButtonGroup config={buttonsConfig} />;
};
MultiFormButtonGroup.propTypes = {
  onBack: PropTypes.func,
  onSave: PropTypes.func,
  onSaveAndNext: PropTypes.func,
  isBackDisabled: PropTypes.bool,
  isSaveDisabled: PropTypes.bool,
  isSaveAndNextDisabled: PropTypes.bool,
};
export default MultiFormButtonGroup;

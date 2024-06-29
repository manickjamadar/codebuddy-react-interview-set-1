import { multiFormButtonNames } from "../config/constants";

const useSubmitMultiForm = ({ onSave, onNext }) => {
  const handleSave = (data) => {
    onSave && onSave(data);
  };
  const handleSaveAndNext = (data) => {
    handleSave(data);
    onNext && onNext();
  };
  const onSubmit = (data, event) => {
    const buttonName = event.nativeEvent.submitter.name;
    if (buttonName === multiFormButtonNames.save) {
      handleSave(data);
    } else if (buttonName === multiFormButtonNames.saveAndNext) {
      handleSaveAndNext(data);
    }
  };
  return onSubmit;
};
export default useSubmitMultiForm;

import { createContext, useCallback, useState } from "react";
import PropTypes from "prop-types";
const MultiFormContext = createContext({
  formData: {},
  saveFormData: () => {},
});

export const MultiFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const saveFormData = useCallback((data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  }, []);
  return (
    <MultiFormContext.Provider value={{ formData, saveFormData }}>
      {children}
    </MultiFormContext.Provider>
  );
};
MultiFormProvider.propTypes = {
  children: PropTypes.node,
};
export default MultiFormContext;

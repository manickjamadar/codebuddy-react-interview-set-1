import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as yup from "yup";
import BaseInput from "../Base/BaseInput";
import MultiFormButtonGroup from "./MultiFormButtonGroup";
import useSubmitMultiForm from "../../hooks/useSubmitMultiForm";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "First name can only contain alphabets")
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name must be at most 50 characters long"),

  lastName: yup
    .string()
    .trim()
    .matches(/^[A-Za-z]*$/, "Last name can only contain alphabets")
    .notRequired(),

  address: yup
    .string()
    .trim()
    .required("Address is required")
    .min(10, "Address must be at least 10 characters long"),
});
const PersonalInfoForm = ({ onBack, onSave, onNext }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = useSubmitMultiForm({ onSave, onNext });
  return (
    <div className="card flex flex-col gap-6 ">
      <h1 className="form-header text-center">Personal Info</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="firstName"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseInput
              id="firstName"
              label="First Name"
              placeholder="Enter your first name"
              showError={invalid}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseInput
              id="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              type="text"
              showError={invalid}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseInput
              id="address"
              label="Address"
              placeholder="Enter your address"
              type="text"
              showError={invalid}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <MultiFormButtonGroup onBack={onBack} />
      </form>
    </div>
  );
};
PersonalInfoForm.propTypes = {
  onBack: PropTypes.func,
  onSave: PropTypes.func,
  onNext: PropTypes.func,
};
export default PersonalInfoForm;

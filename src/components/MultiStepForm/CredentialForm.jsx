import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import BaseInput from "../Base/BaseInput";
import MultiFormButtonGroup from "./MultiFormButtonGroup";
import PropTypes from "prop-types";
import useSubmitMultiForm from "../../hooks/useSubmitMultiForm";
const schema = yup.object().shape({
  emailId: yup.string().trim().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .test(
      "pattern",
      "Password must contain at least 2 uppercase letters, 2 lowercase letters, 2 digits, and 2 special characters",
      (value) => {
        if (!value) return false;
        const uppercaseCount = (value.match(/[A-Z]/g) || []).length;
        const lowercaseCount = (value.match(/[a-z]/g) || []).length;
        const digitCount = (value.match(/\d/g) || []).length;
        const specialCharCount = (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

        return (
          uppercaseCount >= 2 && lowercaseCount >= 2 && digitCount >= 2 && specialCharCount >= 2
        );
      },
    ),
});
const CredentialForm = ({ onSave, onNext }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      emailId: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = useSubmitMultiForm({ onNext, onSave });
  return (
    <div className="card flex flex-col gap-6 ">
      <h1 className="form-header text-center">Credential Info</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="emailId"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseInput
              id="emailId"
              label="Email"
              placeholder="Enter your email"
              showError={invalid}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseInput
              id="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              showError={invalid}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <MultiFormButtonGroup isBackDisabled={true} />
      </form>
    </div>
  );
};
CredentialForm.propTypes = {
  onSave: PropTypes.func,
  onNext: PropTypes.func,
};
export default CredentialForm;

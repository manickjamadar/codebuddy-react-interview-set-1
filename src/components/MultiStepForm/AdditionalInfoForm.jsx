import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import BaseInput from "../Base/BaseInput";
import BaseCheckbox from "../Base/BaseCheckBox";
const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  acceptTermsAndCondition: yup
    .boolean()
    .required("You must accept the terms and conditions")
    .oneOf([true], "You must accept the terms and conditions"),
});
const countryCodes = ["+91", "+1"];
const AdditionalInfoForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      countryCode: countryCodes[0],
      phoneNumber: "",
      acceptTermsAndCondition: false,
    },
    resolver: yupResolver(schema),
  });
  const handleDataAfterSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="card flex flex-col gap-6 ">
      <h1 className="form-header text-center">Additional Info</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleDataAfterSubmit)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className="base-input-label">
            Phone Number
          </label>
          <div className="flex items-start gap-2">
            <div className="">
              <Controller
                control={control}
                name="countryCode"
                render={({ field: { value, onChange } }) => (
                  <select value={value} onChange={onChange} className="base-select">
                    {countryCodes.map((code) => (
                      <option key={code} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            <div className="flex-1">
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
                  <BaseInput
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    type="number"
                    showError={invalid}
                    errorMessage={error?.message}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <Controller
          control={control}
          name="acceptTermsAndCondition"
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <BaseCheckbox
              id="acceptTermsAndCondition"
              label="I accept terms and condition"
              value={value}
              onChange={onChange}
              showError={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <div className="flex justify-center gap-4">
          <button className="base-button" type="button">
            Back
          </button>
          <button className="base-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalInfoForm;

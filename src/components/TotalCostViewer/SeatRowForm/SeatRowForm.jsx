import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as yup from "yup";
const totalRowRangeErrorMessage = "Total row must be minimum 3 and maximum 10";
const schema = yup.object().shape({
  totalRow: yup
    .number()
    .typeError("Total row is required")
    .min(3, totalRowRangeErrorMessage)
    .max(10, totalRowRangeErrorMessage),
});
const SeatRowForm = ({ onSubmit }) => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      totalRow: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmittedData = ({ totalRow }) => {
    const totalRowNum = parseInt(totalRow);
    reset();
    onSubmit && onSubmit(totalRowNum);
  };
  return (
    <form
      className="mx-auto flex max-w-sm flex-col gap-4"
      onSubmit={handleSubmit(handleSubmittedData)}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="row" className="base-input-label text-center">
          Total Row
        </label>
        <Controller
          name="totalRow"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error, invalid } }) => (
            <>
              <input
                id="row"
                className="base-input"
                data-error={invalid}
                type="number"
                placeholder="Enter total row"
                value={value}
                onChange={onChange}
              />
              {invalid && <p className="text-red-500">{error?.message}</p>}
            </>
          )}
        />
      </div>
      <button className="base-button">Fetch Seats</button>
    </form>
  );
};
SeatRowForm.propTypes = {
  onSubmit: PropTypes.func,
};
export default SeatRowForm;

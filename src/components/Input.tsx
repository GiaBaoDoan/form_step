import { FieldError, UseFormRegister } from "react-hook-form";
import { formState } from "..";
type InputType = {
  placeholder: string;
  label: string;
  name: "phone" | "email" | "name";
  type: string;
  error?: FieldError;
  register: UseFormRegister<formState>;
};
// custom class
const handelClass = (error: FieldError | undefined) =>
  error
    ? "border-red-500"
    : "hover:border-blue-500 focus:border-blue-500 border-gray-400";
// main component
const Input = (inputProps: InputType) => {
  const { error, type, label, placeholder, register, name } = inputProps;
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-blue-950 pl-1 text-sm font-semibold" htmlFor="">
          {label}
        </label>
        <span className="text-red-500 max-md:text-sm">{error?.message}</span>
      </div>
      <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        className={`placeholder:text-gray-600  border p-2 placeholder:text-sm rounded-lg mt-2 ${handelClass(
          error
        )}`}
      />
    </div>
  );
};

export default Input;

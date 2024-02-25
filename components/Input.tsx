import { ChangeEventHandler, FC } from "react";

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: number | string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  error?: boolean;
}

export const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label,
  error = false
}) => {
  return (
    <div className="flex flex-col gap-1 has-[:focus]:text-indigo-500">
      {label ? (
        <label htmlFor={name} className=" text-sm font-semibold">
          {label}
        </label>
      ) : null}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border-black rounded-md border-solid border p-2 indent-1 focus:outline-indigo-500 focus:placeholder-indigo-500 ${error ? "border-red-500" : ""}`}
      />
    </div>
  );
};

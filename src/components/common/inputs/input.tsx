/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import { LuAsterisk } from "react-icons/lu";
import { LuEye, LuEyeOff } from "react-icons/lu"; // 👈 Add icons for toggle
import { useFormContext } from "react-hook-form";
import { useState } from "react";

interface IProps {
  label: string;
  type?: "text" | "number" | "email" | "password";
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  rules?: any;
}

const Input: FC<IProps> = ({
  id,
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  rules,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col gap-1 w-full relative">
      {/* label */}
      <div className="flex">
        <label className="text-lg font-bold text-gray-800" htmlFor={id}>
          {label}
        </label>
        {required && <LuAsterisk size={12} className="text-red-500 mt-1" />}
      </div>

      {/* input wrapper */}
      <div className="relative">
        <input
          {...register(name, rules)}
          value={watch(name)}
          className={`border ${
            errors[name]
              ? "border-red-500 focus:outline-red-500"
              : "border-blue-500 focus:outline-blue-500"
          } p-3 rounded-md placeholder:text-lg text-lg w-full`}
          placeholder={placeholder}
          type={isPasswordField && showPassword ? "text" : type}
          id={id}
        />

        {/* toggle button */}
        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
          </button>
        )}
      </div>

      {/* error message */}
      <p className="text-[12px] text-red-500 h-[8px] mt-0.5">
        {errors[name] ? (errors[name]?.message as string) : " "}
      </p>
    </div>
  );
};

export default Input;

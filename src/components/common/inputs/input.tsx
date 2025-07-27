/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, type FC } from "react";
import { LuAsterisk } from "react-icons/lu";
import { useFormContext } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
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
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-1 w-full ">
      {/* label */}
      <div className="flex">
        <label className="text-lg font-bold text-gray-800" htmlFor={id}>
          {label}
        </label>
        {required && <LuAsterisk size={12} className="text-red-500 mt-1" />}
      </div>
      {/* input */}
      <div className="w-full flex items-center relative mt-6">
        <input
          {...register(name, rules)}
          value={watch(name)}
          className={`absolute left-0 right-0 w-full border ${
            errors[name]
              ? "border-red-500 focus:outline-red-500"
              : "border-blue-500 focus:outline-blue-500"
          }
                     p-3 rounded-md placeholder:text-lg text-lg `}
          placeholder={placeholder}
          type={type}
          id={id}
        />
        {type === "password" &&
          (show ? (
            <IoMdEye
              onClick={() => setShow(!show)}
              size={22}
              className="text-gray-600 cursor-pointer absolute right-1"
            />
          ) : (
            <IoMdEyeOff
              onClick={() => setShow(!show)}
              size={22}
              className="text-gray-600 cursor-pointer absolute right-1 " 
            />
          ))}
      </div>
      <p className=" text-[12px] text-red-500 h-[8px] mt-0.6">
        {errors[name] ? (errors[name]?.message as string) : " "}
      </p>
    </div>
  );
};

export default Input;

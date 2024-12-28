import React, { forwardRef } from "react";
import { useRef } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

type InputProps = {
  icon?: React.ReactNode;
  error?: FieldError;
} & React.ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, disabled, error, ...props }, ref) => {
    return (
      <label
        className={`flex items-center gap-4 px-5 py-4 rounded-3xl border-2 
          focus-within:border-primary-500 dark:focus-within:border-primary-500 
          dark:text-neutral-300 text-neutral-800 group transition-colors
          ${
            error
              ? "border-red-500 dark:border-red-500 focus-within:border-red-500 dark:focus-within:border-red-500 focus-within:bg-red-300 dark:focus-within:bg-red-300"
              : ""
          }
          ${
            disabled
              ? "bg-transparent hover:cursor-not-allowed"
              : "hover:cursor-text dark:border-neutral-800 border-neutral-200 dark:bg-black bg-white"
          }`}
      >
        {icon}
        <input
          ref={ref}
          className={`w-full bg-transparent outline-none disabled:cursor-not-allowed ${
            error ? "placeholder:text-red-400" : ""
          }`}
          disabled={disabled}
          {...props}
        />
        {error && <span>{error.message}</span>}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;

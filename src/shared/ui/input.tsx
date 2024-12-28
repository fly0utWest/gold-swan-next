import React from "react";
import { useRef } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  value?: string;
  id?: string;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  icon,
  disabled = false,
  id,
  value,
  required = false,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div
      className={`flex items-center gap-4 px-5 py-4 rounded-3xl border-2  dark:text-neutral-300 text-neutral-800 group focus-within:border-primary-500 dark:focus-within:border-primary-500 transition-colors ${
        disabled
          ? "bg-transparent hover:cursor-not-allowed focus:border-neutral-800 dark:focus:border-neutral-800"
          : "hover:cursor-text dark:focus:text-primary-500 focus:text-primary-500 focus:border-primary-500 dark:focus:border-primary-500 dark:border-neutral-800  border-neutral-200  dark:bg-black bg-white"
      }`}
      tabIndex={0}
      onFocus={() => inputRef.current?.focus()}
    >
      {icon ?? null}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="rounded-r-3xl w-full bg-transparent outline-none disabled:cursor-not-allowed disabled:bg-transparent dark:text-neutral-300 text-neutral-800"
        ref={inputRef}
        {...(id ? { id } : {})}
        {...(value ? { value } : {})}
        required={required}
      />
    </div>
  );
};

export default Input;

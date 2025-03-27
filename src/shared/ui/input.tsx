import { LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  Icon?: LucideIcon;
  error?: FieldError;
} & React.ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, disabled, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label
          className={`flex items-center gap-4 px-5 py-4 rounded-3xl border-2 group transition-colors
          ${
            error
              ? "border-error focus-within:border-error focus-within:bg-error-bg"
              : "focus-within:border-primary-500"
          }
          ${
            disabled
              ? "bg-transparent hover:cursor-not-allowed"
              : "hover:cursor-text border-border bg-input"
          }`}
        >
          {Icon ? <Icon size={32} color={error ? "var(--error)" : "var(--primary-500)"} /> : null}
          <input
            ref={ref}
            className={`w-full bg-transparent outline-none disabled:cursor-not-allowed ${
              error ? "placeholder:text-error-secondary text-error" : ""
            }`}
            disabled={disabled}
            {...props}
          />
        </label>
        {error && <span className="text-error">{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

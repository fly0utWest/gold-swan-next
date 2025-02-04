import React, { forwardRef } from "react";

type TextareaProps = {
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<"textarea">;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ disabled, ...props }, ref) => {
    return (
      <label
        className={`flex items-center gap-4 px-5 py-4 rounded-3xl border-2 
          focus-within:border-primary-500 group transition-colors
          ${
            disabled
              ? "bg-transparent hover:cursor-not-allowed"
              : "hover:cursor-text border-border bg-input"
          }`}
      >
        <textarea
          ref={ref}
          className="w-full bg-transparent outline-none disabled:cursor-not-allowed resize-none"
          disabled={disabled}
          {...props}
        />
      </label>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;

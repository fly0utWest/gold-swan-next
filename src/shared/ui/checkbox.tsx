import React from "react";
import { forwardRef } from "react";
import { CheckSquare, CloseSquare } from "solar-icon-set";
import { ReactNode } from "react";

type CheckboxProps = {
  icon: ReactNode;
  checkedIcon: ReactNode;
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, type, checked, icon, checkedIcon, ...props }, ref) => {
    return (
      <label htmlFor={id} className="flex items-center gap-2 w-fit">
        <input
          type={type}
          ref={ref}
          {...props}
          className="w-5 h-5 rounded border-2 border-neutral-300 hidden"
        />
        {checked ? ( checkedIcon ) : ( icon )}
        <span className={`${checked ? "text-primary-500" : ""}`}>{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

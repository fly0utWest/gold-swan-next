import React from "react";
import { forwardRef } from "react";
import { CheckSquare } from "solar-icon-set";
import {CloseSquare} from "solar-icon-set"

type CheckboxProps = {
  label: string;
} & React.ComponentPropsWithoutRef<"input">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checked, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className="flex items-center gap-2">
        <input
          type="checkbox"
          ref={ref}
          {...props}
          className="w-5 h-5 rounded border-2 border-neutral-300"
        />
        { checked ? <CheckSquare size={24} color="var(--primary-500)" /> : <CloseSquare size={24} />}
        <span>{label}</span>
      </label>
    );
  }
);

export default Checkbox;

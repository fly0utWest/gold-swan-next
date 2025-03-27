import { LucideIcon } from "lucide-react";
import React from "react";
import { forwardRef } from "react"; 

type CheckboxProps = {
  Icon:LucideIcon;
  CheckedIcon: LucideIcon;
  label: string;
  type: "radio" | "checkbox";
} & React.ComponentPropsWithoutRef<"input">;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, id, type, checked, Icon, CheckedIcon, ...props }, ref) => {
    return (
      <label htmlFor={id} className="flex items-center gap-2 w-fit">
        <input
          type={type}
          ref={ref}
          {...props}
          className="w-5 h-5 rounded border-2 border-neutral-300 hidden"
        />
        {checked ? (
          <CheckedIcon size={24} color="var(--primary-500)" />
        ) : (
          <Icon size={24} />
        )}
        <span className={`${checked ? "text-primary-500" : ""}`}>{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;

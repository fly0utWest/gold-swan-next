import Link from "./link";

export type DepartmentButtonProps = {
  disabled?: boolean;
  href?: string;
  name: string;
  Icon: (allProps: any) => JSX.Element;
} & ({ disabled?: true } | { disabled?: false | undefined; href: string });

export function DepartmentButton({
  Icon,
  name,
  disabled = false,
  href,
}: DepartmentButtonProps) {
  return (
    <Link
      href={href || "#"}
      className={`rounded-3xl border-2 dark:border-border border-neutral-200 ${
        disabled
          ? "pointer-events-none dark:text-neutral-200"
          : "text-neutral-800 dark:text-neutral-300"
      } flex flex-row px-8 py-5 hover:text-primary-500 dark:hover:text-primary-500 dark:hover:border-primary-500 transition-colors items-center gap-8 w-full max-w-md lg:max-w-xs bg-neutral-100 dark:bg-black hover:border-primary-500 duration-300 ease-in-out`}
    >
      <Icon size={64} />
      <span className="font-bold text-xl text-center">{name}</span>
    </Link>
  );
}

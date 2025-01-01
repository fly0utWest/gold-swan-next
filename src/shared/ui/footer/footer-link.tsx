import Link from "../link";

export type FooterLinkProps = {
  href: string;
  children: string;
};

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-neutral-800 dark:text-foreground dark:hover:text-primary-500 hover:text-primary-500 lg:hover:font-semibold text-3xl lg:text-lg transition-all
            w-fit text-center lg:text-left font-bold lg:font-sans lg:font-normal"
      underline
      key={children}
    >
      {children}
    </Link>
  );
}

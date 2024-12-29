import { ReactNode } from "react";
import Link from "./link";

type InfoItemProps = {
  icon: ReactNode;
  title: string;
  content: string;
  link?: string;
};

const ContactItem: React.FC<InfoItemProps> = ({
  icon,
  title,
  content,
  link,
}) => (
  <div className="flex flex-row w-full p-4 items-center gap-4">
    {icon}
    <div>
      <p className="text-xl">{title}</p>
      {link ? (
        <Link
          href={link}
          className="font-thin dark:text-primary-200 text-primary-500 hover:underline"
        >
          {content}
        </Link>
      ) : (
        <p className="font-thin">{content}</p>
      )}
    </div>
  </div>
);

export default ContactItem;

import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../authentication/useUser";

interface Account {
  title: string;
  to?: string;
}

interface AccountNavProps {
  account: Account[];
  setPageTitle: (title: string) => void;
}

export default function AccountNav({ account, setPageTitle }: AccountNavProps) {
  const { user } = useUser();
  const avatar = user?.user_metadata?.avatar;
  const fullName = user?.user_metadata?.fullName;

  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-2 my-10">
        <div className="relative">
          <img
            src={avatar || "default-user.jpg"}
            alt={`Avatar of ${fullName}`}
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h3 className="font-semibold text-xl">{fullName}</h3>
      </div>
      <ul className="flex flex-col gap-6 mb-10 font-semibold text-neutral-04 w-1/3">
        {account.map((acc) => (
          <li
            key={acc.title}
            onClick={() => {
              setPageTitle(acc.title);
              setSelectedTitle(acc.title);
            }}
            className="cursor-pointer hover:text-neutral-06 transition-all duration-200"
          >
            <Link
              to={acc.to || "#"}
              className={`${
                acc.title === selectedTitle ? "text-neutral-06" : ""
              }`}
            >
              {acc.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

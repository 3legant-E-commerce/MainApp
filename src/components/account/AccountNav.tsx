import { useState } from "react";
import { Link } from "react-router-dom";

interface Account {
  title: string;
  to?: string;
}

interface AccountNavProps {
  account: Account[];
  setPageTitle: (title: string) => void;
}

export default function AccountNav({ account, setPageTitle }: AccountNavProps) {
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-2 my-10">
        <div className="relative">
          <img
            src="../../../public/images/clouthes-10.png"
            alt="your picture"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <h3 className="font-semibold text-xl">Ramtin Ramezani</h3>
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

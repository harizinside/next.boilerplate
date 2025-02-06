import { ReactNode } from "react";
import Link from "next/link";

interface ReadMoreProps {
  link: string;
  children: ReactNode;
}

export default function ReadMore({ link, children }: ReadMoreProps) {
  return (
    <>
      <div className="border-l-4 border-orange-400 bg-orange-50 rounded-r-lg">
        <div className="ml-3">
          <p className="text-md text-orange-700 font-semibold mb-2">
            Baca juga:
          </p>
          <Link
            className="text-base mt-0 text-orange-900 font-bold"
            href={link}
          >
            {children}
          </Link>
        </div>
      </div>
    </>
  );
}

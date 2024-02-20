import { ReactNode } from "react";

import { IoIosArrowBack } from "react-icons/io";

interface Props {
  title: string;
  children: ReactNode;
  onBackClick?: () => void;
}

function PageLayout({ title, onBackClick, children }: Props) {
  return (
    <div>
      <div className="flex items-center">
        <IoIosArrowBack
          className="text-3xl mr-6 cursor-pointer"
          onClick={onBackClick}
        />
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

export default PageLayout;

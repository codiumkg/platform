import { HTMLAttributes } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Icons = {
  EXCLAMATION: (props: HTMLAttributes<SVGElement>) => (
    <FaExclamationCircle {...props} />
  ),
  ARROW_BACK: (props: HTMLAttributes<SVGElement>) => (
    <IoIosArrowBack {...props} />
  ),
  ARROW_FORWARD: (props: HTMLAttributes<SVGElement>) => (
    <IoIosArrowForward {...props} />
  ),
};

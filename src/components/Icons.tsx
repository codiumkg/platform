import { HTMLAttributes } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdCheckmarkCircle,
} from "react-icons/io";
import { MdHome } from "react-icons/md";

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
  CHECKMARK_CIRCLE: (props: HTMLAttributes<SVGElement>) => (
    <IoMdCheckmarkCircle {...props} />
  ),
  HOME: (props: HTMLAttributes<SVGElement>) => <MdHome {...props} />,
};

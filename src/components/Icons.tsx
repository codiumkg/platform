import { HTMLAttributes } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdCheckmarkCircle,
  IoMdMoon,
} from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BiSolidSun } from "react-icons/bi";

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
  SUN: (props: HTMLAttributes<SVGElement>) => <BiSolidSun {...props} />,
  MOON: (props: HTMLAttributes<SVGElement>) => <IoMdMoon {...props} />,
};

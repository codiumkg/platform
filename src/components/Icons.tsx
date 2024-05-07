import { HTMLAttributes } from "react";
import { FaExclamationCircle } from "react-icons/fa";

export const Icons = {
  EXCLAMATION: (props: HTMLAttributes<SVGElement>) => (
    <FaExclamationCircle {...props} />
  ),
};

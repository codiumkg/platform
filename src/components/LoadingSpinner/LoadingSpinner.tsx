import cn from "classnames";

import styles from "./LoadingSpinner.module.scss";

interface Props {
  size?: "s" | "m" | "l" | "xl";
  light?: boolean;
  color?: string;
}

export default function LoadingSpinner({
  size = "s",
  light = false,
  color,
}: Props) {
  return (
    <div
      className={cn(
        styles.spinner,
        styles[`size-${size}`],
        light ? styles.light : ""
      )}
      style={{ borderTopColor: color ? color : "" }}
    ></div>
  );
}

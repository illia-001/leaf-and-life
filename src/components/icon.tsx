import cn from "classnames";

interface Props {
  iconUrl: string;
  classNames?: string;
  size?: number;
}

export default function Icon({ iconUrl, classNames, size = 20 }: Props) {
  return (
    <div
      className={cn("w-5 h-5 transition-colors duration-200", classNames)}
      style={{
        maskImage: `url(${iconUrl})`,
        WebkitMaskImage: `url(${iconUrl})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        width: size,
        height: size,
      }}
    />
  );
}

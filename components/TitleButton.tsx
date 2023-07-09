"use client";

import Image from "next/image";
import { FC, MouseEventHandler } from "react";

interface TitleButtonProps {
  title: string;
  className?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcon?: string;
  isDisable?: boolean;
}

const TitleButton: FC<TitleButtonProps> = ({
  title,
  className,
  type,
  onClick,
  rightIcon,
  isDisable,
}) => {
  return (
    <button
      disabled={isDisable}
      type={type || "button"}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${className}`}
      onClick={onClick}
    >
      <span className="flex-1">{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right Arrow"
            fill
            priority
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default TitleButton;

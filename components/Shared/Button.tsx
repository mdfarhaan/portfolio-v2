import React from "react";

type ButtonProps = {
  varient?: "primary" | "secondary";
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Button = ({ varient, text, onClick, style }: ButtonProps) => {
  return (
    <>
      {varient !== "secondary" ? (
        <button
          style={{ ...style }}
          className="inline-block rounded bg-blue-500 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110"
          onClick={onClick}
        >
          {text}
        </button>
      ) : (
        <button
          className="inline-block rounded border-2 border-current px-8 py-3 text-sm font-medium text-blue-500 transition hover:rotate-2 hover:scale-110"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;

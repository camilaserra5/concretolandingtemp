import { ReactNode } from "react";
import { IconLoader } from "./icons";

export const Button = ({
  label,
  leftIcon,
  rightIcon,
  isFullW,
  onClick,
  props,
  className,
  isLoading,
}: {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isFullW?: boolean;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: any;
  className?: string;
  isLoading?: boolean;
}) => {
  const classIconWrapper =
    "absolute top-0 size-12 flex items-center justify-center -translate-y-px";
  return (
    <button
      {...props}
      onClick={!isLoading ? onClick : null}
      className={`relative h-12 text-btn-400 font-semibold bg-btn-500 border-2 border-btn-500  rounded-full  ${
        isFullW && " w-full "
      } ${!leftIcon && !label ? " pl-0 " : " pl-6 "} ${
        !rightIcon && !label ? " pr-0 " : " pr-6 "
      }
      
      ${!leftIcon && !label ? " pl-0 " : " pl-8 "} ${!rightIcon && " pr-8 "}
      ${!label && " max-w-12 "}
          ${className} 
          
          ${
            !isLoading
              ? " hover:text-btn-300 hover:border-btn-300 transition-colors duration-500 "
              : " cursor-not-allowed opacity-50 "
          }
          `}
    >
      <div
        className={`flex items-center justify-between w-full ${
          isLoading && " opacity-0 "
        }`}
      >
        {/* Left icon */}
        {leftIcon ? (
          <div
            className={`${classIconWrapper} ${
              !label ? " -left-0.5 " : " left-0 "
            }`}
          >
            {leftIcon}
          </div>
        ) : (
          <div />
        )}

        <p
          className={`w-full text-center font-montserrat text-sm 2xl:text-base tracking-widest uppercase 
              ${leftIcon ? (!rightIcon ? " pr-0 " : "pr-6") : " pr-6 "}
              ${rightIcon ? (!leftIcon ? " pl-0 " : "pl-6") : " pl-6 "}
            `}
        >
          {label}
        </p>

        {/* Right icon */}
        {rightIcon ? (
          <div
            className={`${classIconWrapper} ${
              !label ? " -right-0.5 " : " right-0 "
            }`}
          >
            {rightIcon}
          </div>
        ) : (
          <div />
        )}
      </div>
      {isLoading && (
        <div className="absolute w-full h-full flex items-center justify-center left-0 top-0">
          <div className="w-fit bg-ui-700 rounded-full p-1 animate-spin">
            <IconLoader classname="size-6 text-ui-400" />
          </div>
        </div>
      )}
    </button>
  );
};

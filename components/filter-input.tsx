import { ReactNode, useState } from "react";
import FilterLabel from "./filter-label";
import { IconEye, IconEyeOff } from "./icons";

type FilterInputProps = {
  id: string;
  label?: string;
  labelDescription?: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textCenter?: boolean;
  icon?: ReactNode;
  className?: string;
  type?: string;
  required?: boolean;
  isDisabled?: boolean;
};

export default function FilterInput({
  id,
  label,
  labelDescription,
  value,
  onChange,
  placeholder,
  textCenter,
  icon,
  type = "text",
  className,
  required,
  isDisabled,
}: FilterInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const [showPass, setShowPass] = useState(false);
  const tooglePass = () => setShowPass(!showPass);

  return (
    <div
      className={`relative flex flex-col space-y-1 ${className && className}`}
    >
      {label && (
        <FilterLabel label={label} description={labelDescription} id={id} />
      )}
      <div className="relative bg-btn-500 rounded-full">
        {icon && (
          <div className="absolute size-8.5 flex items-center justify-center bg-ui-200/20 rounded-full text-btn-400">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`w-full relative appearance-none font-montserrat text-sm font-normal tracking-wider text-neutral-50 h-8.5 border border-btn-500 hover:border-btn-300 focus:outline-none focus:ring-1 focus:ring-btn-400 placeholder:text-neutral-50 placeholder:opacity-50 transition-colors duration-300 rounded-full bg-transparent ${
            icon ? " pl-11 " : " pl-3 "
          } ${textCenter ? " text-center pr-7 " : " pr-3 "}
          ${isDisabled ? " cursor-not-allowed  bg-ui-600 " : " "}
          `}
          value={value}
          onChange={handleChange}
          type={type == "password" ? (showPass ? "text" : "password") : type}
          placeholder={placeholder}
          disabled={isDisabled}
          required={required || false}
        />
        {type == "password" && (
          <div
            className={`absolute size-7.5 flex items-center justify-center rounded-full text-btn-400 border border-btn-500 top-0.5 right-0.5 transition-colors duration-300 cursor-pointer ${
              showPass
                ? " text-btn-500 bg-btn-400 hover:bg-btn-300 "
                : " text-btn-400 hover:text-btn-300 bg-btn-500 hover:border-btn-300 "
            } `}
            onClick={() => tooglePass()}
          >
            {showPass ? (
              <IconEye classname="size-6" />
            ) : (
              <IconEyeOff classname="size-6" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export const PriceInput = ({
  id,
  label,
  labelDescription,
  value,
  onChange,
  placeholder,
  textCenter,
  icon,
  className,
}: {
  id: string;
  label?: string;
  labelDescription?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textCenter?: boolean;
  icon?: ReactNode;
  className?: string;
}) => {
  const formatPrice = (val: string) => {
    if (!val) return "";
    const number = parseFloat(val.replace(/,/g, "").replace(/[^0-9.]/g, ""));
    return number.toLocaleString("en-US", {});
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const rawValue = e.target.value.replace(/[^0-9.]/g, "");
    onChange(rawValue);
  };

  return (
    <div className={`relative flex flex-col gap-0.5 ${className && className}`}>
      {label && (
        <FilterLabel label={label} description={labelDescription} id={id} />
      )}
      <div className="relative bg-btn-500 rounded-full">
        {icon && (
          <div className="absolute size-8.5 flex items-center justify-center bg-ui-200/20 rounded-full text-btn-400">
            {icon}
          </div>
        )}

        <input
          value={formatPrice(value)}
          onChange={handleInputChange}
          placeholder={placeholder}
          id={id}
          className={`w-full relative appearance-none font-montserrat text-sm font-normal tracking-wider text-neutral-50 h-8.5 border border-btn-500 hover:border-btn-300 focus:outline-none focus:ring-1 focus:ring-btn-400 placeholder:text-neutral-50 placeholder:opacity-50 transition-colors duration-300 rounded-full bg-transparent ${
            icon ? " pl-11 " : " pl-3 "
          } ${textCenter ? " text-center pr-7 " : " pr-3 "}`}
        />
      </div>
    </div>
  );
};

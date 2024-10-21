import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import FilterLabel from "./filter-label";
import { IconArwSelect } from "./icons";

export type FilterDropdownType = {
  label: string;
  value: string;
};

// TODO: @titus needs to be PRETTIFIED
export default function FilterDropdown({
  id,
  options,
  onSelected,
  onUnselected,
  selected,
  label,
  labelDescription,
  placeholder,
  textCenter,
  icon,
  className,
}: {
  id: string;
  options: FilterDropdownType[];
  onSelected: (value: FilterDropdownType) => void;
  onUnselected: (value: FilterDropdownType) => void;
  selected: FilterDropdownType[];
  label?: string;
  labelDescription?: string;
  placeholder?: string;
  textCenter?: boolean;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col space-y-1 ${className && className}`}
    >
      {label && (
        <FilterLabel label={label} description={labelDescription} id={id} />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="relative bg-btn-500 rounded-full cursor-pointer group">
            {icon && (
              <div className="absolute size-8.5 flex items-center justify-center bg-ui-200/20 rounded-full text-btn-400">
                {icon}
              </div>
            )}
            <input
              id={id}
              className={`w-full relative appearance-none font-montserrat text-sm font-light tracking-wide text-neutral-50 h-8.5 border border-btn-500 group-hover:border-btn-300 focus:outline-none focus:ring-1 focus:ring-btn-400 placeholder:text-neutral-50 placeholder:opacity-50 transition-colors duration-300 rounded-full bg-transparent cursor-pointer ${
                icon ? " pl-11 " : " pl-3 "
              } ${textCenter ? " text-center pr-7 " : " pr-3 "}`}
              value={selected.map((v) => v.label).join(", ")}
              readOnly
              placeholder={placeholder}
            />
            <div className="absolute right-0 top-0 size-8.5 flex items-center justify-center rounded-full text-btn-400 group-hover:text-btn-300">
              <IconArwSelect classname="size-4" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 bg-ui-800 border-4 border-btn-500 text-neutral-50 rounded-xl shadow-xl">
          {options.map((option, index) => {
            return (
              <DropdownMenuCheckboxItem
                key={index}
                checked={
                  selected.map((v) => v.value)?.includes(option.value) || false
                }
                onCheckedChange={(checked) => {
                  if (checked) {
                    onSelected(option);
                  } else {
                    onUnselected(option);
                  }
                }}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

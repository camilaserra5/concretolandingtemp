export default function FilterLabel({
  label,
  description,
  id,
  isSmall,
}: {
  label: string;
  description?: string;
  id: string;
  isSmall?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className={`pl-1 flex font-montserrat uppercase translate-y-0.5  cursor-pointer ${
        isSmall
          ? " text-3xs font-medium text-neutral-100 tracking-widest "
          : " text-2xs font-semibold text-neutral-50 tracking-wider "
      }`}
    >
      {label}
      {description && (
        <span className="pl-1 text-3xs text-ui-200 translate-y-px">
          {description}
        </span>
      )}
    </label>
  );
}

export const TextField = ({
  label,
  name,
  value,
  onChange,
  required = false,
  placeholder,
  className = "",
  type = "text",
}) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        onChange={onChange}
        id={name}
        name={name}
        value={value}
        type={type}
        autoComplete={name}
        required={required}
        className={`mb-4 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

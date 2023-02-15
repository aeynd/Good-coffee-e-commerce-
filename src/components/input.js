export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  error
}) {
  return (
    <>
      <input
        className={`form-control ${error ? "text-red-600" : ""} `}
        type={type || "text"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error} </div>}
    </>
  );
}

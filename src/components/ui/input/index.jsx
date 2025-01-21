export const Input = (props) => {
  // props
  const {required, type, placeholder, className, name, value, onChange } = props;

  return (
    <div className={className ? `input ${className}` : "input"}>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

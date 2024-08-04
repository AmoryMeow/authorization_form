import "./Input.css";

export const Input = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="input-box">
      <input
        type="text"
        required
        className="input"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <label className="label">{label}</label>
    </div>
  );
};

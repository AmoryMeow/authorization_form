import "./Input.css";

export const Input = ({ label }: { label: string }) => {
  return (
    <div className="input-box">
      <input type="text" required className="input" />
      <label className="label">{label}</label>
    </div>
  );
};

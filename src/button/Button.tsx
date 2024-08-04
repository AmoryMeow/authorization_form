import "./Button.css";

export const Button = ({
  label,
  state = "default",
  loading,
  onClick,
}: {
  label: string;
  state: "default" | "loading" | "success";
  loading?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`button ${state}`}
      type="submit"
      disabled={loading}
      onClick={onClick}
    >
      {state === "default" && <span>{label}</span>}
      {state === "loading" && <div className="spinner"></div>}
      {state === "success" && (
        <>
          <svg className="checkmark" viewBox="0 0 16 16">
            <path d="M6 10.5L3.5 8l-.7.7L6 12l7-7-.7-.7z" />
          </svg>
          Success!
        </>
      )}
    </button>
  );
};

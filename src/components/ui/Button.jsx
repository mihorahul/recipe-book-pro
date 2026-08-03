function Button({ children, type = "button", variant = "primary", onClick }) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",

    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",

    success: "bg-green-600 hover:bg-green-700 text-white",

    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} px-5 py-3 rounded-lg font-medium transition`}
    >
      {children}
    </button>
  );
}

export default Button;

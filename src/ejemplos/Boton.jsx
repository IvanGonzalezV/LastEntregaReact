
const Boton = ({ children, className = "", onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gradient-to-r from-black to-gray-400 rounded-full py-2 px-4 text-white font-semibold ${className}`}
    >

      {children}
    </button>
  );
};

export default Boton;
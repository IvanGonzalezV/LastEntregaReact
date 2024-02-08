import Boton from "../../ejemplos/Boton";

const QuantitySelector = ({ cantidad, stock, setCantidad }) => {
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="flex gap-4 items-center">
      <Boton onClick={handleRestar}
        className={cantidad === 1}
        disabled={cantidad === 1}>
          -
        </Boton>

      <span>{cantidad}</span>
      <Boton onClick={handleSumar}
        className={cantidad === stock}
        disabled={cantidad === stock}>
          +
        </Boton>

    </div>
  );
};

export default QuantitySelector;
import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const EmtpyCart = () => {
  return (
    <section className="container mx-auto my-8 text-center">
      <h2 className="text-4xl font-semibold mb-4">El carrito está vacío</h2>
      <p className="text-lg mb-8">Agrega algún producto a tu carrito</p>
      <Boton>
        <Link to={"/"}>Volver</Link>
      </Boton>
    </section>
  );
};

export default EmtpyCart;

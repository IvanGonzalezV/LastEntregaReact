import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Boton from "../../ejemplos/Boton";
import trashIcon from "../../assets/trash.svg";
import { Link } from "react-router-dom";
import EmtpyCart from "./EmtpyCart";

const CartView = () => {
  const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);

  if (cart.length === 0) return <EmtpyCart />;

  return (
    <section className="container mx-auto my-8">
      <h2 className="text-4xl font-semibold text-center mb-4">Tu Compra</h2>

      <ul className="mx-auto">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex gap-3 border-b my-4 items-center"
          >
            <div className="flex items-center">
              <img
                src={item.img}
                alt="Cart img"
                className="w-32 md:mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-2xl text-center">{item.name}</h3>
                <p className="text-2xl font-bold text-center">
                  $ {item.price * item.cantidad}
                </p>
                <p className="text-center">Cantidad: {item.cantidad}</p>
              </div>
            </div>

            <Boton
              onClick={() => removeItem(item.id)}>
              <img src={trashIcon} className="w-4" alt="trash icon" />
            </Boton>
          </li>
        ))}
      </ul>

      <h4 className="text-4xl font-semibold text-center mt-8">
        TOTAL: ${totalCart()}
      </h4>
      <div className="flex justify-center mt-8">
        <Boton onClick={clearCart} className="bg-gray-500 text-white">
          Vaciar carrito
        </Boton>
        <Boton className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white">
          <Link to="/checkout">Finalizar mi compra</Link>
        </Boton>
      </div>
    </section>
  );
};

export default CartView;

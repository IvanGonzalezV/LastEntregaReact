import { useContext, useState } from "react";
import Boton from "../../ejemplos/Boton";
import QuantitySelector from "./QuantitySelector";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const [cantidad, setCantidad] = useState(1);
  const { addToCart, isInCart } = useContext(CartContext);

  const handleAgregar = () => {
    const itemToCart = {
      ...item,
      cantidad,
    };

    addToCart(itemToCart);
  };

  const handleVolver = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto mt-8">
      <Boton onClick={handleVolver}>Volver</Boton>
      <h3 className="mt-4 text-2xl font-semibold">{item.name}</h3>
      <hr />

      <div className="flex gap-8 pt-4">
        <img src={item.img} alt={item.name} className="w-64 h-64 object-cover rounded-md" />

        <div>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-xl font-bold">Precio: ${item.price}</p>

          {isInCart(item.id) ? (
            <Boton>
              <Link to="/cart">Terminar mi compra</Link>
            </Boton>
          ) : (
            <>
              <QuantitySelector cantidad={cantidad} stock={item.stock} setCantidad={setCantidad} />
              <Boton onClick={handleAgregar} disabled={item.stock === 0} className="mt-4">
                Agregar al carrito
              </Boton>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
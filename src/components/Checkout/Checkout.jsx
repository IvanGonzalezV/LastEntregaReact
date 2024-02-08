import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cart, totalCart, clearCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orden = {
      cliente: values,
      items: cart,
      total: totalCart(),
      fecha: new Date(),
    };

    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, orden).then((doc) => {
      setOrderId(doc.id);
      clearCart();

      Swal.fire({
        title: "¡Gracias por tu compra!",
        icon: "success",
        customClass: {
          popup: "bg-black text-white",
        },
      });
    });
  };

  if (orderId) {
    return (
      <div className="container mx-auto mt-10 text-center">
        <h2 className="text-4xl font-semibold">Gracias por tu compra</h2>
        <p className="text-lg font-semibold mb-4">
          Tu código de compra es: <span className="text-cyan-400">{orderId}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-4xl font-semibold text-center mb-4">Checkout</h2>

      <h4 className="text-lg font-semibold mb-4">Ingresa tus datos:</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
        <input
          className="border p-2 bg-gray-800 text-white rounded-full"
          type="text"
          placeholder="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          name="nombre"
        />

        <input
          className="border p-2 bg-gray-800 text-white rounded-full"
          type="text"
          placeholder="Dirección"
          value={values.direccion}
          onChange={handleInputChange}
          name="direccion"
        />
        <input
          className="border p-2 bg-gray-800 text-white rounded-full"
          type="number"
          placeholder="Teléfono"
          value={values.telefono}
          onChange={handleInputChange}
          name="telefono"
        />
        <input
          className="border p-2 bg-gray-800 text-white rounded-full"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-white py-2 rounded-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;


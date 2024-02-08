import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({item}) => {
  return (
    <article className="flex bg-gray-800 text-white p-4 mb-4 rounded-md items-center">
      <img src={item.img} alt={item.name} className="w-20 h-20 mr-4 object-cover rounded-md" />
      <div>
        <h3 className="text-2xl font-semibold">{item.name}</h3>
        <hr className="border-white my-2" />
        <p>{item.description}</p>
        {item.stock <= 10 && <p className="font-bold text-cyan-400">Quedan sólo {item.stock} unidades!</p>}
        <p className="text-xl font-bold">Precio: ${item.price}</p>
        <Boton>
          <Link to={`/item/${item.id}`}>Ver más</Link>
        </Boton>
      </div>
    </article>
  );
};

export default ItemCard;


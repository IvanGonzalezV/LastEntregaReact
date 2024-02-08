
import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ productos }) => {
  return (
    <section className="container mx-auto mt-8">
      <h2 className="text-4xl font-bold">Productos</h2>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productos.map((item) => (
          <div key={item.id} className="flex">
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
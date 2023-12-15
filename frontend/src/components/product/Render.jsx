import React from "react";
import useProducts from "../../hooks/useProducts";
import { FaTrash } from "react-icons/fa";

function ProductsRender() {
  const { products, deleteProduct } = useProducts();
  return (
    <div>
      {products.map((product) => (
        <div className="flex shadow-lg justify-between p-4 rounded-sm">
          <h2>{product.name}</h2>
          <p>₡{product.price}</p>
          <p>{product.measuramentUnit}</p>
          <button className="text-danger" onClick={() => deleteProduct(product.id)}>
            <FaTrash />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductsRender;

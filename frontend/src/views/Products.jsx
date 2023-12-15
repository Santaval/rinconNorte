import React from "react";
import { Link } from "react-router-dom";
import ProductsRender from "../components/product/Render";

function Products() {
  return (
    <main className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Productos</h1>
        <Link to="/product/new" className="text-primary">
          Nuevo producto
        </Link>
      </header>

      <ProductsRender />
    </main>
  );
}

export default Products;

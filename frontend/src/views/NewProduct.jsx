import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CreateProduct from "../components/product/Create";

function NewProduct() {
  return (
    <main className="p-8">
      <header className="mb-8">
        <Link to={"/products"} className="flex items-center text-primary gap-2">
          <FaArrowLeftLong />
          Volver
        </Link>
      </header>
      <CreateProduct />
    </main>
  );
}

export default NewProduct;

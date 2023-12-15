import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CreateIngredient from "../components/ingredient/Create";

function NewIngredient() {
  return (
    <main className="p-8">
      <header className="mb-8">
        <Link to={"/ingredients"} className="flex items-center text-primary gap-2">
          <FaArrowLeftLong />
          Volver
        </Link>
      </header>
      <CreateIngredient />
    </main>
  );
}

export default NewIngredient;

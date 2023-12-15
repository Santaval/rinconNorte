import React from "react";
import CreateMilkProvider from "../components/provider/Create";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function NewProvider() {
  return (
    <main className="p-8">
      <header className="mb-8">
        <Link to={"/providers"} className="flex items-center text-primary gap-2">
          <FaArrowLeftLong />
          Volver
        </Link>
      </header>
      <CreateMilkProvider />
    </main>
  );
}

export default NewProvider;

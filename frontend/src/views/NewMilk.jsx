import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CreateMilk from "../components/milk/Create";

function NewMilk() {
  return (
    <main className="p-8">
      <header className="mb-8">
        <Link to={"/milk"} className="flex items-center text-primary gap-2">
          <FaArrowLeftLong />
          Volver
        </Link>
      </header>
      <CreateMilk />
    </main>
  );
}

export default NewMilk;

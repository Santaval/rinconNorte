import React from "react";

import { Navigate } from "react-router-dom";
import CreateProcess from "../components/process/Create";
import useProcess from "../hooks/useProcess";
import ProcessCard from "../components/process/Card";

function Panel() {

  const {process} = useProcess();

  if (!localStorage.getItem('access')) return <Navigate to="/" />;

  return (
    <>
     
      <main className="p-4">
        <header>
          <CreateProcess />
        </header>

       <section className="mt-4">
        <h3 className="font-bold">Procesos</h3>

        <div>
          {process.map((item) => (
            <ProcessCard key={item.id} process={item} />
          ))}
        </div>
       </section>
      </main>
    </>
  );
}

export default Panel;

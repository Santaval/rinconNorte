import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import API from "../lib/API";
import { Button, Input } from "@nextui-org/react";
import Process from "../components/Process";
import { Link, Navigate } from "react-router-dom";

function Panel() {
  const [process, setProcess] = useState([]);
  const [milk, setMilk] = useState(null);
  const [provider, setProvider] = useState(null);

  const getProcess = useCallback(async () => {
    const { data } = await axios.get(`${API}/cheese?activeOnly=true`);
    setProcess(data);
  }, []);

  const handdleNewProcess = async () => {
    await axios.post(`${API}/cheese`, {
      milk: [{
        liters: milk,
        provider,
      }],
    });
    getProcess();
  };

  useEffect(() => {
    getProcess();
  }, [getProcess]);

  if (!localStorage.getItem('access')) return <Navigate to="/" />;

  return (
    <>
      <NavBar />
      <main>
        <header className="px-8 gap-4 flex flex-col mt-4">
          <div className="flex gap-3">
            <Input
              onChange={(evt) => setMilk(evt.target.value)}
              type="number"
              placeholder="Litros de leche"
            />
            <Input
              onChange={(evt) => setProvider(evt.target.value)}
              type="text"
              placeholder="Proveedor"
            />
          </div>
          {milk && milk > 0 && provider && (
            <Button onPress={handdleNewProcess} color="primary" variant="flat">
              Iniciar
            </Button>
          )}
        </header>

        <section className="p-3 mt-12 flex flex-col gap-12">
          {process.map((process) => <Process receivedProcess={process} />)}
        </section>
      </main>
    </>
  );
}

export default Panel;

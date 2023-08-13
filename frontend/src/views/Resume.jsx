import React, { useEffect, useState } from "react";
import CompletedProcess from "../components/CompletedProcess";
import NavBar from "../components/NavBar";
import axios from "axios";
import API from "../lib/API";

function Resume() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    const getProcess = async () => {
        const { data } = await axios.get(`${API}/cheese?completedOnly=true`);
        console.log(data);
        setProcess(data);
    };
    getProcess();
  }, []);

  return (
    <>
      <NavBar />
      <main className="px-4 flex flex-col gap-8 mt-16">
        {process && process.map((current) => (
          <CompletedProcess receivedProcess={current} />
        ))}
      </main>
    </>
  );
}

export default Resume;

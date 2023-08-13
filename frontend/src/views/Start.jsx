import React, { useState } from "react";
import NavBar from "../components/NavBar";
import PasswordInput from "../components/PasswordInput";
import { Button } from "@nextui-org/react";
import axios from "axios";
import API from "../lib/API";

function Start() {
  const [token, setToken] = useState(null);

  const handleSubmit = async (value) => {
    const { data } = await axios.post(`${API}/access`, { token });

    if (data.access) {
      window.localStorage.setItem("access", data.access);
      window.location.href = "/panel";
    } else {
      alert("Token incorrecto");
    }
  };
  return (
    <>
      <NavBar />

      <main className="flex justify-center flex-col gap-3 h-[60vh] items-center">
        <div>
          <img src="rn.jpeg" className="w-[180px]" alt="" />
        </div>

        <PasswordInput onInput={setToken} className="mt-16" />
        {token && (
          <Button
            onPress={() => handleSubmit()}
            className="w-[80%]"
            variant="light"
            color="secondary"
          >
            Ingresar
          </Button>
        )}
      </main>
    </>
  );
}

export default Start;

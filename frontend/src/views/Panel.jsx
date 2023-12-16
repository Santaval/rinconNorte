import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import API from "../lib/API";
import { Button, Input } from "@nextui-org/react";
import Process from "../components/Process";
import { Navigate } from "react-router-dom";
import CreateProcess from "../components/process/Create";

function Panel() {

  if (!localStorage.getItem('access')) return <Navigate to="/" />;

  return (
    <>
     
      <main className="p-4">
        <header>
          <CreateProcess />
        </header>
      </main>
    </>
  );
}

export default Panel;

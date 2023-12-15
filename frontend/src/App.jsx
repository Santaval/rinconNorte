import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./views/Start";
import Panel from "./views/Panel";
import Resume from "./views/Resume";
import NavBar from "./components/NavBar";

import CreateMilkProvider from "./components/provider/Create";


function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/resumen" element={<Resume />} />
        <Route path="/provider/new" element={<CreateMilkProvider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

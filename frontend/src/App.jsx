import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./views/Start";
import Panel from "./views/Panel";
import Resume from "./views/Resume";
import NavBar from "./components/NavBar";

import NewProvider from "./views/NewProvider";
import Providers from "./views/Providers";
import NewMilk from "./views/NewMilk";
import Milk from "./views/Milk";
import NewProduct from "./views/NewProduct";


function App() {
  return (
    <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/resumen" element={<Resume />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/providers/new" element={<NewProvider />} />
        <Route path="/milk/new" element={<NewMilk />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/product/new" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./views/Start";
import Panel from "./views/Panel";
import Resume from "./views/Resume";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/resumen" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

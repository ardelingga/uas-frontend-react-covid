import { Route, Routes } from "react-router-dom";
import LayoutGlobal from "./components/LayoutGlobal";
import StyleGlobal from "./components/StyleGlobal";
import About from "./pages/About";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Global from "./pages/covid/Global";

function App() {
  return (
    <>
      <StyleGlobal/>
      <LayoutGlobal>
        <Routes>
          <Route path="/" element={<Global />}/>
          <Route path="/indonesia" element={<Indonesia />}/>
          <Route path="/provinsi" element={<Provinsi />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </LayoutGlobal>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import GlobalStyle from "./components/GlobalStyle";
import About from "./pages/About";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import Global from "./pages/covid/Global";

function App() {
  return (
    <>
      <GlobalStyle/>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Global />}/>
          <Route path="/indonesia" element={<Indonesia />}/>
          <Route path="/provinsi" element={<Provinsi />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </GlobalLayout>
    </>
  );
}

export default App;

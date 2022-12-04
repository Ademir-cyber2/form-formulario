import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Busca from "pages/Busca";

const Rotas = () => (

    <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Busca" element={<Busca />} />
        </Routes>
    </BrowserRouter>

);

export default Rotas
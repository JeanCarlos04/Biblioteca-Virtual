import { Login } from "./components/Login.jsx";
import { SearchBooks } from "./components/SearchBooks.jsx";
import { Register } from "./components/Register.jsx";
import { UserPerfil } from "./components/UserPerfil.jsx";
import { Routes, Route } from "react-router-dom";
import { Reservas } from "./components/Reservas.jsx";
import "./styles/generalStyles.css";
import "./styles/registerStyle.css";
import "./styles/perfilStyle.css";
import "./styles/reservasStyle.css";
import "./styles/loginStyle.css";
import "./styles/searchBooks.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/menu" element={<SearchBooks />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/perfil" element={<UserPerfil />}></Route>
        <Route path="/reservas" element={<Reservas />}></Route>
      </Routes>
    </>
  );
}

export default App;

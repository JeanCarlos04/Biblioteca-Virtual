import { Login } from "./components/Login.jsx";
<<<<<<< HEAD
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
=======
import { MenuLibrary } from "./components/MenuLibrary.jsx";
import { SearchBooks } from "./components/SearchBooks.jsx";


// import { LibraryManagement } from "./components/LibraryManagement.jsx";
import "./styles/loginStyles.css";
import "./styles/menuStyle.css";
import "./styles/searchBooks.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb

function App() {
  return (
    <>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/menu" element={<SearchBooks />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/perfil" element={<UserPerfil />}></Route>
        <Route path="/reservas" element={<Reservas />}></Route>
      </Routes>
=======
      <BrowserRouter>
        <Routes>
          {/* Ruta para el login */}
          <Route path="/" element={<Login />} />

          {/* Ruta para el menú principal */}
          <Route 
            path="/menu" 
            element={<MenuLibrary />} 
          />

          {/* Ruta para la búsqueda de libros */}
          <Route 
            path="/search" 
            element={<SearchBooks />} 
          />

          {/* Nueva ruta para mostrar el correo del usuario */}
       
          
        </Routes>
      </BrowserRouter>
>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb
    </>
  );
}

export default App;

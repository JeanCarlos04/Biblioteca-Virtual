import { Login } from "./components/Login.jsx";
import { MenuLibrary } from "./components/MenuLibrary.jsx";
import { SearchBooks } from "./components/SearchBooks.jsx";


// import { LibraryManagement } from "./components/LibraryManagement.jsx";
import "./styles/loginStyles.css";
import "./styles/menuStyle.css";
import "./styles/searchBooks.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

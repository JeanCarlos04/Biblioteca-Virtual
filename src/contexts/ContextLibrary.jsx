import { createContext } from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { supabase } from "../supabase/dataClient";

ContextLibraryProvider.propTypes = {
  children: PropTypes.node,
};
const ContextLibrary = createContext();

function ContextLibraryProvider({ children }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const { data, error } = await supabase.from("Usuarios").select("*");

      if (error) {
        console.error("Error al obtener datos:", error);
      } else {
        console.log(data);
        setUsuarios(data);
      }
      setLoading(false);
    };

    fetchUsuarios();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <ContextLibrary.Provider value={{ usuarios }}>
      {children}
    </ContextLibrary.Provider>
  );
}

export { ContextLibraryProvider, ContextLibrary };

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
  useEffect(() => {
    const fetchUsuarios = async () => {
      let { data: Usuarios, error } = await supabase
        .from("Usuarios")
        .select("*");

      if (error) console.error(error);
      setUsuarios(Usuarios);
    };
    fetchUsuarios();
  }, []);

  return (
    <ContextLibrary.Provider value={{ usuarios }}>
      {children}
    </ContextLibrary.Provider>
  );
}

export { ContextLibraryProvider, ContextLibrary };

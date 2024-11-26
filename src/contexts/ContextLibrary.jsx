import { createContext } from "react";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { supabase } from "../supabase/dataClient";
import { useNavigate } from "react-router-dom";

ContextLibraryProvider.propTypes = {
  children: PropTypes.node,
};
const ContextLibrary = createContext();

function ContextLibraryProvider({ children }) {
  const navigate = useNavigate();

  // LOGIN CON GOOGLE

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/menu`,
      },
    });
    if (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        setUser(null);
        window.location.href = "/";
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();

      if (data) {
        setUser(data.user);
      } else {
        console.error("Error obteniendo el usuario:", error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  // FIN de login con google

  return (
    <ContextLibrary.Provider
      value={{
        handleLogin,
        handleLogout,
        user,
      }}
    >
      {children}
    </ContextLibrary.Provider>
  );
}

export { ContextLibraryProvider, ContextLibrary };

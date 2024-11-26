<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/dataClient";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    data ? navigate("/menu") : console.error(error);
    setEmail("");
    setPassword("");
  }

  const navigateTo = () => {
    navigate("/");
  };

  return (
    <div className="containers">
      <div className="container1">
        <h1 className="h1-register">¡Welcome back!</h1>
        <p className="p-register">
          Immerse yourself in a sea of stories! Sign in to explore our catalog.
        </p>
        <p className="p-cont">You don&apos;t have an account?</p>
        <button onClick={() => navigateTo()} className="bton-re">
          Sign Up
        </button>
      </div>
      <form onSubmit={(e) => signInWithEmail(e)} className="container2">
        <div className="container2-elements">
          <img className="logo-re" src="../svg/logo.png"></img>
          <h1 className="sign-re">Sign In</h1>
          <div className="inputs-r">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input-re"
              type="email"
              autoComplete="username"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input-re"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
            />
          </div>
          <button /*onClick={() => handleLogin()}*/ className="btn-sign">
            Sign In
          </button>
          <div className="remem-forgot">
            <label className="remember-text">
              <input className="checkbox-remem" type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-pas">
              Forgot password?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
=======
import { HiUser } from "react-icons/hi2";
import { MdAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { supabase } from "../supabase/dataClient";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); // Estado para guardar datos del usuario

  // Verificar si el usuario ya tiene sesión activa
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error al obtener la sesión:", error.message);
        }

        if (data && data.session) {
          console.log("Sesión activa encontrada:", data.session);
          setUserData(data.session.user); // Guardar datos del usuario
          navigate("/menu"); // Redirigir si hay sesión activa
        } else {
          console.log("No hay sesión activa.");
        }
      } catch (err) {
        console.error("Error inesperado al verificar la sesión:", err);
      }
    };

    checkSession();
  }, [navigate, userData]);

  const handleGoogleLogin = async () => {
    try {
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/menu`,
        },
      });

      if (error) {
        console.error("Error al iniciar sesión con Google:", error.message);
      } else {
        console.log("Login exitoso:", data);
        setUserData(data.user); // Guardar datos del usuario
        navigate("/menu");
      }
    } catch (err) {
      console.error("Error inesperado al iniciar sesión:", err);
    }
  };

  return (
    <>
      <form className="form-container">
        <div className="container">
          <h1 className="h1-login">Crea una cuenta!</h1>
          <p className="mensaje">
            No tienes una cuenta? <a href="#">Inicia sesión</a>
          </p>
          <div className="inputs">
            <div className="div-inputs-i">
              <HiUser className="icon-user" />
              <input
                className="input-f"
                type="text"
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="div-inputs-i">
              <MdAttachEmail className="icon-email" />
              <input
                className="input-f"
                type="email"
                autoComplete="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="div-inputs-i">
              <RiLockPasswordFill className="icon-password" />
              <input
                className="input-f"
                type="password"
                autoComplete="password"
                placeholder="Contraseña"
                required
              />
            </div>
          </div>
          <div className="remember-forgot">
            <div className="remember">
              <label className="remember-label">
                <input className="checkbox-remember" type="checkbox" /> Remember
                me
              </label>
              <a href="/menu" className="forgot-pass">
                Forgot password?
              </a>
            </div>
          </div>
          <button className="btn-login">Registrate</button>
        </div>
       
      </form>
      <button type="button" className="btn-google" onClick={handleGoogleLogin}>
          Iniciar sesión con Google
        </button>
    </>
  );
}







>>>>>>> e25c9bffbc2786cfa7dcc733a2c7b45059368ebb

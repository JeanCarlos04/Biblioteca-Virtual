import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState, useContext } from "react";
import { ContextLibrary } from "../contexts/ContextLibrary";
import { supabase } from "../supabase/dataClient";

export function Register() {
  const { handleLogin } = useContext(ContextLibrary);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function signUpNewUser(e) {
    e.preventDefault();
    if (password == repeatPassword) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login`,
        },
      });
      data ? console.log(data) : console.error(error);
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      console.log("Las contraseñas no son iguales");
    }
  }

  const navigateTo = () => {
    navigate("/login");
  };

  return (
    <div className="form-containers">
      <div className="container-1">
        <h1 className="h1-welcome">¡Welcome!</h1>
        <p className="p-frase">
          Create your account and start reading right now.
        </p>
        <p className="p-cuenta">Do you have an account?</p>
        <button onClick={() => navigateTo()} className="bton-cuenta">
          Sign In
        </button>
        <hr className="hr-google"></hr>
        <span className="span-hr">Or</span>
        <button onClick={() => handleLogin()} className="btn-google">
          <FcGoogle className="google-icon"></FcGoogle>Continue with Google
        </button>
      </div>
      <form onSubmit={(e) => signUpNewUser(e)} className="container-2">
        <div className="container2-elemnt">
          <img className="logo-biblio" src="../svg/logo.png" />
          <h1 className="sign-title">Sign Up</h1>
          <div className="inputs-1">
            <input
              className="input-s"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              value={email}
              type="email"
              placeholder="Email"
            />
            <input
              className="input-s"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              autoComplete="current-password"
              placeholder="Password"
            />
            <input
              className="input-s"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              type="password"
              autoComplete="repeatPassword"
              placeholder="Repeat password"
            />
          </div>
          <div className="btn-container">
            <button className="boton-up">Sign Up </button>
          </div>
        </div>
      </form>
    </div>
  );
}

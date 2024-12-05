import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/dataClient";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Iniciar sesion con email y password

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

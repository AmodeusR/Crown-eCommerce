import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "/src/components";
import {
  userSignIn,
  signInWithGooglePopup as googleSignIn
} from "../../utils/firebase/firebase";

const SignInForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const resetFormFields = () => {
  //   setEmail("");
  //   setPassword("");
  // };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await userSignIn(email, password);

      navigate("/");
    } catch (error) {
      console.warn(error.message);
      if (error.code === "auth/user-not-found") {
        alert("There is no account with this email");
      } else if (error.code === "auth/wrong-password") {
        alert("Your password is wrong");
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await googleSignIn();
        
      navigate("/");
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <section className="signin">
      <h2 className="signin__title">{title}</h2>
      <span className="auth__subtext">Access your account here!</span>
      <form className="signin__form" onSubmit={handleLogin}>
        <Input
          title="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <Input
          title="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <div className="buttons" style={{ display: "flex", gap: "1rem" }}>
          <Button title="Sign in to your account" type="submit" />
          <Button
            title="Sign in with Google"
            color="royalblue"
            type="button"
            onClick={handleSignInWithGoogle}
          />
        </div>
      </form>
    </section>
  );
};

export default SignInForm;


import { signInWithGooglePopup as googleSignIn, createUserDoc } from "/src/utils/firebase/firebase";
import { SignUpForm, SignInForm } from "../../components";
import "./auth.scss";

const Authentication = () => {

  return (
    <div className="container">
      <div className="sections">
        <SignInForm title="Sign In" />
        <SignUpForm title="Sign up" />
      </div>
    </div>
  );
};

export default Authentication;

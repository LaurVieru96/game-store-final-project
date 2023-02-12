import { signInWithGoogle } from "../../service/config";
import { FcGoogle } from "react-icons/fc";

const SignInGoogle = (props) => {
  return (
    <div>
      {props.children}
      <button
        style={{
          alignItems: "center",
          display: "flex",
          cursor: "pointer",
          padding: "10px",
          border: "none",
          borderRadius: "12px",
        }}
        onClick={signInWithGoogle}
      >
        <FcGoogle style={{ marginRight: "5px", fontSize: "25px" }} /> Sign in
        with google
      </button>
    </div>
  );
};

export default SignInGoogle;

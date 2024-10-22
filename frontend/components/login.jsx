import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function login() {
  const navigator = useNavigate();
  function handleSignIn() {
    navigator("/userpage");
  }
  return (
    <div className="login-comp">
      <div className="login-right-div">
        <div className="login-header">
          <h1>Welcome Back!</h1>
        </div>
        <form action="">
          <div className="login-form-div">
            <div className="login-input-div">
              <input type="email" placeholder="Username" />
            </div>
            <div className="login-input-div">
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="forget-pass-div">
              <a href="">Forget Password?</a>
            </div>
            <div>
              <Button
                variant="contained"
                id="login-button"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

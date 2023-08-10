import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./security/AuthContext";
import { Alert } from "react-bootstrap";
function LoginComponent() {
  const [userName, setUserName] = useState("onurokkyay");

  const [password, setPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState(null);

  const navigate = useNavigate();

  const authContext = useAuth();

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await authContext.login(userName, password);
      setAlertMessage({ type: "success", text: "Login Successful" });
      navigate('/home')
    } catch (error) {
      setAlertMessage({
        type: "danger",
        text:
          "An error occurred while login: " + error.response.data,
      });
    }
  }

  return (
    <div className="Login">
      <h1>Time to login!</h1>
      {alertMessage && (
        <Alert
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
          variant={alertMessage.type}
          onClose={() => setAlertMessage(null)}
          dismissible
        >
          {alertMessage.text}
        </Alert>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={handleUserNameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;

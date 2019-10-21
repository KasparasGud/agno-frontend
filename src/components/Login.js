import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setRedirect(true);
    }
  }, []);

  const handleSubmit = () => {
    if (email === "admin" && password === "admin") {
      localStorage.setItem("authToken", "yes");
    }
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to="dashboard" />
  ) : (
    <div>
      <label>
        Email:{" "}
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Password:{" "}
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
        />
      </label>
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import { Button } from "@mui/material";

export const LoginButton = ({text}) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button    className="loginButton"
      onClick={(e) => {
        loginWithRedirect();
      }}
    >
     {text}
    </button>
  );
};

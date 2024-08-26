import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { LogoutOutlined } from "@mui/icons-material";
// import { IconButton } from "@mui/material/";
//import { StyledLink } from "../shared_styles/styled_buttons";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
      className='login_logout_buttons'
      // <IconButton
      aria-label="logout"
      onClick={() => {
        logout({ returnTo: window.location.origin});
      }}
    >
      Logout
      {/* <LogoutOutlined /> */}
      {/* </IconButton> */}
    </button>
  );
};

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settingFormPurposeToDistributePercentagesOfJars, clearFormPurpose } from '../actions/currentSelectionActions';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./0auth/Login";
import { Logout } from "./0auth/Logout";
export const NavigationBar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div className='navigation_bar'>

            {/* <Link to="/"> */}
            {/* <div  className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/Dashboard.png")`
                        }} >
                        </div> */}
            {/* </Link> 
                    <Link to="/distribution"> */}
            {/* <div  className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/distribution.png")`
                        }} >
                        </div> */}
            {/* </Link> */}




            {/*                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/calendar.png")`
                    }}>
                    </div> */}

            {!isAuthenticated ? (
                <Login />
            ) : (
                <>
                    <label className='simple_label'>{user.email}</label>
                    {/* <div className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/Dashboard.png")`
                    }} >
                    </div>
                    <div className=" nav_icon picture div_img" style={{
                        backgroundImage: `url("/imgs/calendar.png")`
                    }}>
                    </div> */}
                    <Logout />
                </>
            )}

            {/*               
            
            
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/trophy.png")`
                    }}>
                    </div>
                
            
            
                   
                    <div  className=" nav_icon picture div_img" style={{
                    backgroundImage: `url("/imgs/user.png")`
                    }}>
                    </div> */}



        </div>
    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { settingUser } from '../actions/currentSelectionActions';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./0auth/Login";
import { Logout } from "./0auth/Logout";
import { getMovements } from "../actions/MovementsActions.js";
import { getJars } from "../actions/JarsActions.js";
export const NavigationBar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const userOnState = useSelector((state) => (state.currentSelection.user ? state.currentSelection.user : null));
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(settingUser(user));
        }
    }, [isAuthenticated]);
    useEffect(() => {
        if (userOnState) {
            dispatch(getMovements(userOnState));
            dispatch(getJars(userOnState));
        }
    }, [userOnState]);
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

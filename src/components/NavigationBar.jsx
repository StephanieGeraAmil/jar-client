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
            {!isAuthenticated ? (
                <Login />
            ) : (
                <>
                    <label className='simple_label'>{user.email}</label>
                    <Logout />
                </>
            )}
        </div>
    )
}

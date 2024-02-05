import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "../routes/Login.js";
import Mainpage from "../routes/Mainpage.js"
import Invertpage from "../routes/Invertpage.js"

import React, {useState, useEffect } from "react";

function AppRouter(props){
    return(
        <div>
            <Routes>
                <Route path = "/" element = {<Mainpage/>}/>
                <Rotue path = "/main" element = {<Mainpage/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Rotue path = "/invert" element = {<Invertpage/>}/>
            </Routes>
        </div>
    )
}
export default AppRouter;
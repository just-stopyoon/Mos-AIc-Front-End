import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Navigation from "./Navigation.js";
import Login from "../routes/Login.js";
import Mainpage from "../routes/Mainpage.js"
import Mypage from "../routes/Mypage.js"

import React, {useState, useEffect } from "react";

function AppRouter(props){
    return(
        <div>
            <Routes>
                <Route path = "/" element = {<Mainpage/>}/>
                <Rotue path = "/main" element = {<Mainpage/>}/>
                <Route path = "/account" element = {<Account/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Rotue path = "/mypage" element = {<Mypage/>}/>
            </Routes>
        </div>
    )
}
export default AppRouter;
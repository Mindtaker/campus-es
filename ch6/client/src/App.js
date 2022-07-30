/**
 * @author Nicolás Tutor
 * Blog con autenticación de usuarios usando React, Node, MongoDB y React.
 */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import {
  REGISTER,
  LOGIN,
  ALL_POSTS,
  CREATE_POST,
  LOGOUT,
} from "./config/routes/paths";
import PrivateRoute from "./components/router/PrivateRoute";
import PublicRoute from "./components/router/PublicRoute";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";
import CreatePost from "./views/CreatePost";
import AllPosts from "./views/AllPosts";
import Logout from "./views/Logout";
import NotFound from "./views/NotFound";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path={ALL_POSTS} element={<AllPosts />} />
            <Route path={CREATE_POST} element={<CreatePost />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

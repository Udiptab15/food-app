import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Recipe from "./Recipe";
import Blog from "./Blog";
import Login from "./Login"
import Register from "./Register";

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/about', component: <About /> },
  { path: '/recipe', component: <Recipe /> },
  { path: '/blog', component: <Blog /> },
  { path: '/contact', component: <Contact /> },
  { path: '/login', component: <Login /> },
  { path: '/register', component: <Register /> },
 
];

export default routes;
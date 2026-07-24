import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import axios from 'axios';
import "./index.css";
import Layout from './Layout';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import { ToastContainer } from 'react-toastify';
import AddBook from './Components/Add-Book';
import ViewBooks from './Components/ViewBooks';
import Image from './Components/Image';
import OpenBook from './Components/OpenBook';
import Notifications from './Components/Notifications';
import BorrowForm from './Components/BorrowForm';
import Dashboard from "./Components/Dashboard";
import {AuthProvider} from "./Components/AuthContext";

axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/user/login' element={<Login/>}/>
    <Route path='/user/signup' element={<Signup/>}/>
    <Route path='/about-us' element={<AboutUs/>}/>
    <Route path='/book/add-book' element={<AddBook/>}/>
    <Route path='/books' element={<ViewBooks/>}/>
    <Route path='/image' element={<Image/>}/>
    <Route path='/book/:book_title' element={<OpenBook/>}/>
    <Route path='/notifications' element={<Notifications/>}/>
    <Route path='/:book_title/borrow' element={<BorrowForm/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
    <ToastContainer/>
  </>
)
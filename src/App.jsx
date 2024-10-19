import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Project from './component/Project';
import { CartProvider } from 'react-use-cart';
/* The following line can be included in your src/index.js or App.js file */


function App() {

  return (
    <>
    <CartProvider>
       <Header/>
       <Project/>
       </CartProvider>
    </>
  )
}

export default App

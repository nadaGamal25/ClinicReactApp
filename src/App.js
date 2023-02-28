import './App.css';
import Navbars from './Components/Navbars/Navbars';
import { Fragment } from 'react';
import Home from './pages/Home';
import Footer from './Components/Footer/Footer';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';

const routes= createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
  <Route index path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/blog' element={<Blog/>}/>
  </Route>

))

function App() {
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  );
}

export default App;

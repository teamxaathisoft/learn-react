

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './New/home';
import Blogs from './New/blogs';
import Contact from './New/contact';
import Layout from "./New/layout";
import Aboutus from "./New/aboutus";
import Detail from "./New/detail";
import Context from "./New/nopages";
import NoPages from "./New/nopages";
import Appilication from "./New/appilication";




function App() {
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Detail" element={<Detail />} />
          <Route path="Context" element={<Context />} />
          <Route path="NoPages" element={<NoPages />} />
          <Route path="Appilication" element={<Appilication />} />
        
              </Route>
      </Routes>

    </BrowserRouter>
   
 
       
     );
}

export default App;

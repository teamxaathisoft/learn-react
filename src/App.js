/*import React, { Component } from 'react';
import './index.css';
import IncrementSample from './component/context';
import Test from './component/test';
import SchoolInformation from './task/schoolinformation';

export default  function App() {
    // constructor() {
    //     super();
    // }
    // // render() {
    //     return (<div>
    //         <h2>Increment sample</h2>
    //         <IncrementSample>
    //             <Test></Test>
    //         </IncrementSample>
    //     </div>);
    // }
    return(    <div>
        <SchoolInformation></SchoolInformation>
    </div>
    );
        
    
}*/




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import Layout from "./pages/layout";
import Nopage from "./pages/Nopage";
import Dog from "./pages/Dog";





function App() {
  return (

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Nopage" element={<Nopage />} />
          <Route path="Dog" element={<Dog />} />
          
              </Route>
      </Routes>
      
    </BrowserRouter>

    
   
 
       
     );
}

export default App;
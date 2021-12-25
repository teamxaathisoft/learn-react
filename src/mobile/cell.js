import React from "react";
import Detail from "./list";


export default function Mobiledetail()
{
    const Model=[
        { name: 'samsung', prize: 2000, image: '/image/samsung.webp' },
        { name: 'nokia', prize: 3500, image: '/image/nokia.jpeg' },
        { name: 'redmi', prize: 6000, image: '/image/redmi.webp' },
        { name: 'realme', prize: 8500,  image: '/image/realme.jpeg' }
       ];
       var newmodel = Model.map(output =>{
         
       return(
       <div>
           <Detail
         name= {output.name}
           prize= {output.prize}/>
           <div>
           <img src={output.image} alt="Sri"/> 
           </div>
           </div>);
       });
                                                                                                   
       return(
           <div>
               <h1>
                   mobile models in filpkart
               </h1>
               {newmodel}
           </div>
       )
       }

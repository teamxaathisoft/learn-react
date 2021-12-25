import React from 'react';
import Calcul from '../heading/call';
import Mobiledetail from "../mobile/cell";
import StudentList from "../form/student";


export default function Blogs(){
    return(
        <div>
            <h1 style={{color: "green"}}>Blogs</h1>
            <p>
                this is a blog page.
            </p>
            <div>
                <Calcul/>
            </div>
            <div>
                <Mobiledetail/>
            </div>
            
            <div>
                <StudentList/>
            </div> 

        </div>
    )
}
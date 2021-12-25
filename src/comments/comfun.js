import React from "react";
import Ram from "./compps";
import { useEffect, useState } from 'react';

export default function Comment(props){
   let SriList="";
       return(
        <div>
            <FetchUsers/>
            
            {SriList}
        </div>
    );
}


function FetchUsers() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
      async function fetchEmployees() {
        const response = await fetch('https://gorest.co.in/public/v1/comments');
        const { data } = await response.json(response);
        setEmployees(data);
      }
      fetchEmployees();
    }, []);
    return (
      <div>
        {employees.map(Raja => <Ram id={Raja.id} name={Raja.name} post_id={Raja.post_id} email={Raja.email} />)}
      </div>
    );
  }

 
import React from "react";
import Sri from "../posts/pospps";
import { useEffect, useState } from 'react';

export default function Post(props){
   let SriList="";
   
    return(
        <div>
            <FetchUsers/>
            <h2>Post page</h2>
            <p> THis is Post page</p>
            <p> User Data List goes here</p>
            {SriList}
        </div>
    );
}


function FetchUsers() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
      async function fetchEmployees() {
        const response = await fetch('https://gorest.co.in/public/v1/posts');
        const { data } = await response.json(response);
        setEmployees(data);
      }
      fetchEmployees();
    }, []);
    return (
      <div>
        {employees.map(Ram => <Sri id={Ram.id} user_id={Ram.user_id} title={Ram.title} />)}
      </div>
    );
  }


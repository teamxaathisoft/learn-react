import React from "react";
import Ramu from "./todspps";
import { useEffect, useState } from 'react';

export default function Todos(props){
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
        const response = await fetch('https://gorest.co.in/public/v1/todos');
        const { data } = await response.json(response);
        setEmployees(data);
      }
      fetchEmployees();
    }, []);
    return (
      <div>
        {employees.map(King => <Ramu id={King.id} title={King.title} user_id={King.user_id} due_on={King.due_on} />)}
      </div>
    );
  }

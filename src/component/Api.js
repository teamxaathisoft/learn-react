import React from "react";
import User from "./browser";
import { useEffect, useState } from 'react';
export default function Api(props){
   let UserList="";
   const [employees, setEmployees] = useState([]);
    return(
        <div>
            <FetchUsers/>
            <h2>Home Page</h2>
            <p>This is home page</p>
            <p>User Data List goes here</p>
            {UserList}
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
        {employees.map(d => <User id={d.id} user_id={d.user_id} title={d.title} due_on={d.due_on} ststus={d.status} />)}
      </div>
    );
  }

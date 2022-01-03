import React from "react";
import User from "./browser";
import { useEffect, useState } from 'react';
import axios from "axios";
export default function Api(props){
   let UserList="";
   const [employees, setEmployees] = useState([]);

  useEffect(()=>{
    debugger;
     // POST request using axios with set headers
     const article1 = { title: 'React POST Request Example' };
     const article = {
      "id":1000,
      "name":"senthillkumar",
      "email":"abc@gmail.com",
      "body":"welcome to aathisoft.com"

   };
     const headers = { 
         'Authorization': 'Bearer 777a89a3f6edb99788713f0b4ffa1cb2d7f240ed6b9eaf58297d51b64e1c6423',
         'My-Custom-Header': 'foobar'
     };
     axios.post('https://gorest.co.in/public/v1/posts/123/comments', article, { headers })
         .then(response => {
           console.log(response);
            //this.setState({ articleId: response.data.id });
         });
  });

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

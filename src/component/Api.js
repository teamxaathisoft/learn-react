import User from "./browser";
import { useEffect, useState } from 'react';
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import axios from "axios";
import Comment from "./comment";


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
            {/* <FetchUsers/> */}
            <FetchComments></FetchComments>
            <h2>Home Page</h2>
            <p>This is home page</p>
            <p>User Data List goes here</p>
            {UserList}
        </div>
    );
}

function FetchUsers() {
    const [employees, setEmployees] = useState([]);
    var gridData={};
    debugger;
    const { data } = useDemoData({
      dataSet: 'Commodity',
      rowLength: 100,
      maxColumns: 6,
    });
    gridData={
      columns:[
        {
          field:"id",
          headerName:"ID",
          width:200
        },
        {
          field:"user_id",
          headerName:"PostId",
          width:200
        },
        {
          field:"title",
          headerName:"Title",
          width:200
        },
        {
          field:"due_on",
          headerName:"Due",
          width:200
        },
        {
          field:"status",
          headerName:"Status",
          width:200
        },

      ],
      rows:[
        {
          id:200,
          user_id:"200",
          title:"hello",
          due_on:"sdjlsdj",
          status:"true"
        },
        {
          id:200,
          user_id:"200",
          title:"hello",
          due_on:"sdjlsdj",
          status:"true"
        },
        {
          id:200,
          user_id:"200",
          title:"hello",
          due_on:"sdjlsdj",
          status:"true"
        }

      ]
    };

    console.log(data);
    useEffect(() => {
      async function fetchEmployees() {
        const response = await fetch('https://gorest.co.in/public/v1/todos');
        let { data } = await response.json(response);
        console.log(data,gridData);
        debugger;
        setEmployees(data);

        for(var i=0;i<data.length;i++){
          var d =        {
            id:data[i].id,
            user_id:data[i].user_id,
            title:data[i].title,
            due_on: data[i].due_on,
            status: data[i].status
          };
   
         // gridData.rows.push(d);
          }
        //gridData = data;

      }
      fetchEmployees();
    }, []);
    return (
      <div>
         <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...gridData}
        components={{
          Toolbar: GridToolbar,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
      />
    </div>
        {employees.map(d => <User id={d.id} user_id={d.user_id} title={d.title} due_on={d.due_on} ststus={d.status} />)}
      </div>
    );
  }

function FetchComments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      async function fetchCommentData() {
        const response = await fetch('https://gorest.co.in/public/v1/posts/123/comments');
        const { data } = await response.json(response);
        setComments(data);
      }
      fetchCommentData();
    }, []);
    return (
      <div>
        {comments.map(d => <Comment id={d.id} post_id={d.post_id} name={d.name} email={d.email} body={d.body} />)}
      </div>
    );
  }
  
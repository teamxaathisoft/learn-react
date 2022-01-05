import User from "./browser";
import { useEffect, useState } from 'react';
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function Api(props){
  let List="";
      return(
       <div>
           <FetchUsers/>
           
           
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

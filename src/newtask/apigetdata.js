import React from "react";
import { useEffect, useState } from 'react';
import Receive from "./receive";

export const MyContext = React.createContext({});


export default function GetDAta() {

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
        <MyContext.Provider value={employees}>

            <div>
                <Receive />
            </div>
        </MyContext.Provider>
    );
}


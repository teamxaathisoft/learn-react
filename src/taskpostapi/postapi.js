import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';



export default function Postapi() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value })) 
    }

    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        console.log(inputs);
       
        debugger;
        // POST request using axios with set headers
        //const article1 = { title: 'React POST Request Example' };
       // const data = {"id":1454,"post_id":123,"name":"senthillkumar","email":"abc@gmail.com","body":"welcome to aathisoft.com"}
        const data = {
        
            "id":1454,
            "post_id":123,
            "name": inputs.name,
            "email": inputs.email,
            "body": inputs.body
        

        };
        const headers = {
            'Authorization': 'Bearer 777a89a3f6edb99788713f0b4ffa1cb2d7f240ed6b9eaf58297d51b64e1c6423',
            'My-Custom-Header': 'foobar'
        };
        console.log(data)
        axios.post('https://gorest.co.in/public/v1/posts/123/comments', data, { headers })
            .then(response => {
                debugger;
                console.log(response);

                //this.setState({ articleId: response.data.id });
            });
    }

    //   useEffect(()=>{
    //     debugger;
    //      // POST request using axios with set headers
    //      //const article1 = { title: 'React POST Request Example' };
    //      const article = {
    //       "id":inputs.Id,
    //       "user_id":inputs.User_id,
    //       "title":inputs.Title,
    //       "due_on":inputs.Due_on,
    //       "status": inputs.Status

    //    };
    //      const headers = { 
    //          'Authorization': 'Bearer 777a89a3f6edb99788713f0b4ffa1cb2d7f240ed6b9eaf58297d51b64e1c6423',
    //          'My-Custom-Header': 'foobar'
    //      };
    //      axios.post('https://gorest.co.in/public/v1/users/123/todos', article, { headers })
    //          .then(response => {
    //            console.log(response);

    //             //this.setState({ articleId: response.data.id });
    //             });

    //   });


    return (
        <form>
            <div>
                <h1>Postapi</h1>

            </div>
            <label>Name:</label>
            <input type="text"
                name="name"
                value={inputs.name || ""}
                onChange={handleChange}
            />

            <div>
                <label>Email:</label>

                <input
                    type="text"
                    name="email"
                    value={inputs.email|| ""}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Body:</label>

                <input
                    type="text"
                    name="body"
                    value={inputs.body || ""}
                    onChange={handleChange}
                />
            </div>
            


            <div>
                <button onClick={(event) => handleSubmit(event)}> Submit </button>
                {inputs.article}
            </div>


        </form>
    )
}
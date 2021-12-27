import { useState } from "react";
export default function Student(props) {
  const [inputs, setInputs] = useState({ studentname: props.studentname, fathername: props.fathername, mothername: props.mothername, address: props.address });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // this.props.enroll(inputs)

  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>STUDENT ADMISSION</h1>
      <label>Student Name:</label>

      <input
        type="text"
        name="studentname"
        value={inputs.studentname || ""}
        onChange={handleChange}
      />

      <div>
        <label>Father name:</label>

        <input
          type="text"
          name="fathername"
          value={inputs.fathername || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Mother Name:</label>

        <input
          type="text"
          name="mothername"
          value={inputs.mothername || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
  
  />
      </div>
      <div>
        <label>DOB:</label>
        <input
          type="date"
          name="address"
          value={inputs.address || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <button> Enrollment </button>
        <button> Remove </button>
      </div>
    </form>
  )
}
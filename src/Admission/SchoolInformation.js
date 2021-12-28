import React from "react";

export default function SchoolInformation(props) {
  return (
    <div>

      <h2>School Details</h2>
      <div>
        <form>
          <div>
            <label>
              SchoolName:
            </label>
            <input type="text" name="Schoolname" value={props.name} />
          </div>

          <div>
            <label>
              Address:
            </label>
            <input type="text" name="Address" value={props.address} />
          </div>

          <div>
            <label>
              PhoneNumber:
            </label>
            <input type="text" name="PhoneNumber" value={props.phone} />
          </div>

          <div>
            <label>
              Email:
            </label>
            <input type="text" name="Email" value={props.email} />
          </div>
          <div>
            <label>
              Website:
            </label>
            <a href={props.website}>
             {props.website}
            </a>


          </div>
          {/* <div>
            <label>
              PrincipleNumber:
            </label>
            <input type="text" name="PrincipleNumber" value="8985623475" />
          </div>
          <div>
            <label>
              SecrateryNumber:
            </label>
            <input type="text" name="SecrateryNumber" value="BKN" />
          </div>
          <div>
            <label>
              No.of.classes:
            </label>
            <input type="text" name=" No.of.classes" value="20" />
          </div>
          <div>
            <label>
              No.of.teacher:
            </label>
            <input type="text" name=" No.of.teacher" value="40" />
          </div> */}

        </form>



      </div>

    </div>
  )
}
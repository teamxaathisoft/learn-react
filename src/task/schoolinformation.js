import React from "react";



export default function SchoolInformation() {
  return (
    <div>
      <h1>SCHOOL ADMISSION</h1>
      <div>
        <form>
          <div>
            <label>
              SchoolName:
            </label>
            <input type="text" name="Schoolname" value="BKN" />
          </div>

          <div>
            <label>
              Address:
            </label>
            <input type="text" name="Address" value="99/8,alangudi" />
          </div>

          <div>
            <label>
              PhoneNumber:
            </label>
            <input type="text" name="PhoneNumber" value="8565564548" />
          </div>

          <div>
            <label>
              Email:
            </label>
            <input type="text" name="Email" value="prasanth@gmail.com" />
          </div>
          <div>
            <label>
              Website:
            </label>
            <a href="https://app.aathisoft.com/">
             click me
            </a>


          </div>
          <div>
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
          </div>

          <div>
            <button variant="primary">ADD</button>
          </div>


        </form>



      </div>

    </div>
  )
}
import React, { Component } from "react";
import { render } from "react-dom";
import SchoolInformation from "../studenttask/schoolinformation";
import Student from "../Admission/student";


export default class Enrollment extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideSchool: false,
      showHidesStudent: false
      
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideSchool":
        this.setState({ showHideSchool: !this.state.showHideSchool });
        break;
      case "showHideStudent":
        this.setState({ showHideStudent: !this.state.showHideStudent });
        break;
      default:
          break;
        
    }
  }

  render() {
    const { showHideSchool, showHideStudent } = this.state;
    return (
      <div>
        {showHideSchool && <SchoolInformation />} 
        <hr />
        {showHideStudent && <Student />}
        <hr />
        
        <div>
          <button onClick={() => this.hideComponent("showHideSchool")}>
            Click to hide School component
          </button>
          <button onClick={() => this.hideComponent("showHideStudent")}>
            Click to hide Student component
          </button>
          
        </div>
      </div>
    );
  }
}
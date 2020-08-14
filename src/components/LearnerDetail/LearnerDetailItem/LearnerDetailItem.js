import React from "react";

import classes from "./LearnerDetailItem.module.css";

// import Button from "../../UI/Button/Button";

export default function LearnerDetailItem(props) {

    return (
        <div >
           
              <h1>   NAME: {props.product.name}</h1><br/>
                <h1>   EMAIL: {props.product.email}</h1><br/>
                <h1>   CONTACT NUMBER: {props.product.phone}</h1><br/>
                <h1>   LINKEDIN: {props.product.linkedin}</h1><br/>
                <h1>   ATTENDENCE: {props.product.attendance}%</h1><br/>
                <h1>   NO. OF LINES OF CODES: {props.product.codeLines}</h1><br/>
              
        </div>
    );
}

import React from "react";
import "../styles/Form.css";

function Form()
{
    return(
        <div className = "form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="full name"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Gender</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Rather not say</option>
                </select>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label"></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
             <a href="#"><button type="button" class="submit-btn">Submit</button></a>
         </div>
    );
}

export default Form;
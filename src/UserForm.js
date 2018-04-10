import React, { Component } from 'react';
import './UserForm.css';

export default function UserForm(props){
    return (
        <form className={'userForm'} onSubmit={event => event.preventDefault()}>
          <div className="formGroup">
              <label htmlFor="title">Title</label><br/><br/>
              <input
                  className="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter title (Mr/Mrs)"
                  name="title"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">First Name</label><br/><br/>
              <input
                  className="form-control"  
                  id="firstName"            
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">Last Name</label><br/><br/>
              <input
                  className="form-control"  
                  id="lastName"            
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">Date of Birth</label><br/><br/>
              <input
                  className="form-control"  
                  id="dateBirth"            
                  type="text"
                  placeholder="Date of Birth"
                  name="dateBirth"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">Annual Income</label><br/><br/>
              <input
                  className="form-control"  
                  id="annualIncome"            
                  type="text"
                  placeholder="Annual Income"
                  name="annualIncome"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">Employment Status</label><br/><br/>
              <input
                  className="form-control"  
                  id="employmentStatus"            
                  type="text"
                  placeholder="Employment Status(Full time employment, Student)"
                  name="employmentStatus"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">House Number</label><br/><br/>
              <input
                  className="form-control"  
                  id="houseNumber"            
                  type="text"
                  placeholder="House Number"
                  name="houseNumber"
                  onChange={props.handleInputChange}
              />
          </div>
          <div className="formGroup">
              <label htmlFor="author">Post Code</label><br/><br/>
              <input
                  className="form-control"  
                  id="postCode"            
                  type="text"
                  placeholder="Post Code"
                  name="postCode"
                  onChange={props.handleInputChange}
              />
          </div>
          <button className='submitButton'>
            Submit
          </button>
        </form>
    )
}
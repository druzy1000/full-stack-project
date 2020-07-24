import React , { useState }  from 'react';
import { Link,NavLink, BrowserRouter as Router } from "react-router-dom";


const EmployeeTable = props =>(
    <Router>
    <button>+</button>
    <table>
        <thead>
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.length > 0 ? (
                props.employees.map(employee =>(
                    <tr key={employee.id}>
                    <td> 
                        <Link to="/edit/:">{employee.firstName} {employee.lastName}</Link>
                    </td>
                    <td>{employee.email}</td>
                    <td>
                        <button className ="btn btn-warning" onClick = {()=> this.deleteEmployee(employee.id)}>Delete</button>
                    </td>
                </tr>
                ))
            ):(
                <tr>
                <td colSpan={3}>No employees</td>
              </tr>
            )}
          </tbody>
        </table>
        </Router>
      )


export default EmployeeTable
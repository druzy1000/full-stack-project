import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EmployeeService from '../service/EmployeeService';

class EmployeeList extends React.Component {
    _isMounted = false;
    constructor(props){
        super(props)
        this.state = {
            employees: [],
        }
        if(!EmployeeService.authenticated){
            props.history.push('/')
        }
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.onDeleteEmployees = this.onDeleteEmployees.bind(this)
    }
        componentDidMount() {
            this._isMounted = true;
            this.refreshEmployees();
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        refreshEmployees(){
            EmployeeService.retrieveAllEmployees()
                .then(
                    response => {
                        if (this._isMounted) {
                            this.setState({ employees: response.data })
                        }
                    })
        }

        onDeleteEmployees(id){
            EmployeeService.deleteEmployee(id)
                .then(() =>{
                    this.refreshEmployees();
                    alert('Employee Successfully Deleted!');
                })
        }
        render(){
    return(
        <div className="container">
            <h1>Employee List</h1>
            <Link to={`/add/`}><button className ="btn btn-success">+</button></Link>
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td> 
                                <Link to ={`/edit/${employee.id}`}>{employee.firstName} {employee.lastName}</Link>
                            </td>
                            <td>{employee.email}</td>
                            <td>
                                <button onClick={()=>{this.onDeleteEmployees(employee.id)}} >Delete</button>
                            </td>
                        </tr>
                    )
                }
              </tbody>
            </table>
            </div>
    )
        }
    }

 
export default EmployeeList
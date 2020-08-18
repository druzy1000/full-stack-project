import axios from 'axios';

const EMPLOYEE_API_URL = 'http://ada0c3f8f059848f7ac03fb2498db75d-713297605.us-east-2.elb.amazonaws.com/employee/api';

class EmployeeService {

    authenticated = false;
    retrieveAllEmployees(){
        return axios.get(`${EMPLOYEE_API_URL}`);
    }
    retrieveEmployee(id){
        return axios.get(`${EMPLOYEE_API_URL}/${id}`)
    }
    addEmployee(employee){
        return axios.post(`${EMPLOYEE_API_URL}/add`, employee)
    }
    updateEmployee(id, employee){
        return axios.put(`${EMPLOYEE_API_URL}/edit/${id}`, employee)
    }
    deleteEmployee(id){
        return axios.delete(`${EMPLOYEE_API_URL}/${id}`)
    }
}
export default new EmployeeService()
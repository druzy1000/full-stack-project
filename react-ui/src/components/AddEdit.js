import React from 'react'
import EmployeeService from '../service/EmployeeService';
import SimpleReactValidator from 'simple-react-validator';

class AddEdit extends React.Component {
  _isMounted = false;
  
  constructor(props) {
    super(props)
    this.validator = new SimpleReactValidator();
    if(!EmployeeService.authenticated){
      props.history.push('/')
  }
    if(this.props.match.params.id !== undefined){
      this.state = {
        employee: {
          id: this.props.match.params.id, firstName:"", lastName:"", address:"", city:"", state:"", zip:"", homePhone:"", cellPhone:"", email:""
        }
      }
    }
    else{
      this.state = {
        employee: {
          id: -1,firstName:"", lastName:"", address:"", city:"", state:"", zip:"", homePhone:"", cellPhone:"", email:""
        }
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);    
  }


  componentDidMount(){
    this._isMounted = true;

    if(this.state.employee.id === -1){
      return
    }
      EmployeeService.retrieveEmployee(this.state.employee.id)
        .then(response => {    
          if (this._isMounted) {
            this.setState({
              employee:{
                id: response.data.id,
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                address: response.data.address,
                city: response.data.city,
                state: response.data.state,
                zip: response.data.zip,
                homePhone: response.data.homePhone,
                cellPhone: response.data.cellPhone,
                email: response.data.email
              }
            })
          }})
      }
  
  componentWillUnmount() {
      this._isMounted = false;
  }

  isValid(){
      if(this.validator.allValid()){
          alert('You submitted the form and stuff!');
      }else {
          this.validator.showMessages();
          this.forceUpdate();
      }
  }

  onSubmit(event) {
      if(this.state.employee.id === -1 && this.validator.allValid()){
        EmployeeService.addEmployee(this.state.employee)
          .then(() => {
            alert('Employee Successfully Added!');
             this.props.history.push('/employees');
          })
      }
      else if(this.state.employee.id !== -1 && this.validator.allValid()){
        EmployeeService.updateEmployee(this.state.employee.id, this.state.employee)
          .then(() => {
            alert('Employee Successfully Updated!');
             this.props.history.push('/employees')
          })
      }else{
        this.validator.showMessages();
        this.forceUpdate();
      }

    event.preventDefault();
  }

  onCancel(event){
      if (window.confirm("Are you sure you want to cancel?")) {
          this.props.history.push('/employees');
      } 
      event.preventDefault();
  }

  handleChange = ({ target }) => {
      this.setState({ employee:{
          ...this.state.employee,
          [target.name]: target.value }});
  }

  render(){
     let { firstName,lastName,address,city,state,zip,homePhone,cellPhone,email } = this.state.employee
    return (
      <div className="container">
      <form>
        <h1>Employee Form</h1>
        <label>First Name</label>
        <input 
            type="text" 
            name="firstName" 
            value={firstName}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('First Name', this.state.employee.firstName, 'required|alpha_space|min:2|max:35')}</div>

        <label>Last Name</label>
        <input 
            type="text" 
            name="lastName" 
            value={lastName}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('Last Name', this.state.employee.lastName, 'required|alpha_space|min:2|max:35')}</div>

        <label>Address</label>
        <input 
            type="text" 
            name="address" 
            value={address}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('Address', this.state.employee.address, 'required|alpha_num_dash_space|min:10|max:50')}</div>

        <label>City</label>
        <input 
            type="text" 
            name="city" 
            value={city}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('City', this.state.employee.city, 'required|alpha_space|min:5|max:50')}</div>

        <label>State</label>
        <select
            name='state'
            value={state}
            onChange={this.handleChange}
        >
            <option value="">Select State...</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AR">AR</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DC">DC</option>
            <option value="DE">DE</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="IA">IA</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="MA">MA</option>
            <option value="MD">MD</option>
            <option value="ME">ME</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MO">MO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="NC">NC</option>
            <option value="NE">NE</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NV">NV</option>
            <option value="NY">NY</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WI">WI</option>
            <option value="WV">WV</option>
            <option value="WY">WY</option>
        </select>
        <div className = "valid">{this.validator.message('State', this.state.employee.state, 'required|alpha|min:2|max:2')}</div>
        <label>Zip/Postal Code</label>
        <input 
            type="text" 
            name="zip" 
            value={zip}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('Zip', this.state.employee.zip, 'required|numeric|min:5|max:9')}</div>
        <br></br>
        <hr></hr>
        <label>Home Phone</label>
        <input 
            type="text" 
            name="homePhone" 
            value={homePhone}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('Home Phone', this.state.employee.homePhone, 'required|phone|min:10|max:10')}</div>
        <label>Cell Phone</label>
        <input 
            type="text" 
            name="cellPhone" 
            value={cellPhone}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('Cell Phone', this.state.employee.cellPhone, 'required|phone|min:10|max:10')}</div>
        <label>Email</label>
        <input 
            type="email" 
            name="email" 
            value={email}
            onChange ={this.handleChange}
        />
        <div className = "valid">{this.validator.message('email', this.state.employee.email, 'required|email|min:10|max:50')}</div>
        <br/>
        <button style={{marginRight: '20px', backgroundColor: 'grey'}} onClick={this.onCancel}>Cancel</button>
        <button type="submit" onClick={this.onSubmit} >Submit</button>
      </form>
      </div>
    )
  }
  }


export default AddEdit

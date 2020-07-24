import React, {useState} from 'react';


const AddEditForm = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [email, setEmail] = useState("");

    return (
      <form>
        <label>First Name:</label>
        <input 
            type="text" 
            name="firstName" 
            value={firstName}
            onChange={e => setFirstName(e.target.value)} 
            required
        />
        <label>Last Name</label>
        <input 
            type="text" 
            name="lastName" 
            value={lastName}
            onChange={e => setLastName(e.target.value)} 
            required
        />
        <label>Address</label>
        <input 
            type="text" 
            name="address" 
            value={address}
            onChange={e => setAddress(e.target.value)} 
            required
        />
        <label>City</label>
        <input 
            type="text" 
            name="city" 
            value={city}
            onChange={e => setCity(e.target.value)} 
            required
        />
        <label>State</label>
        <input 
            type="text" 
            name="state" 
            value={state}
            onChange={e => setState(e.target.value)} 
            required
        />
        <label>Zip/Postal Code</label>
        <input 
            type="text" 
            name="zip" 
            value={zip}
            onChange={e => setZip(e.target.value)} 
            required
        />
        <br></br>
        <hr></hr>
        <label>Home Phone</label>
        <input 
            type="text" 
            name="homePhone" 
            value={homePhone}
            onChange={e => setHomePhone(e.target.value)} 
            required
        />
        <label>Cell Phone</label>
        <input 
            type="text" 
            name="cellPhone" 
            value={cellPhone}
            onChange={e => setCellPhone(e.target.value)} 
            required
        />
        <label>Email</label>
        <input 
            type="email" 
            name="email" 
            value={email}
            onChange={e => setEmail(e.target.value)} 
            required
        />
        <button>Submit</button>
      </form>
    )
  }
  export default AddEditForm;
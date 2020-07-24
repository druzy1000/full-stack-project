import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import AddEdit from './components/AddEdit';
import NotFound from './components/NoPageFound';
import Login from './components/Login';


function App() {
  return (
  <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/employees" component={EmployeeList} />
      <Route path="/edit/:id" component={AddEdit} />
      <Route path="/add/" component={AddEdit} />
      <Route component={NotFound} />
      </Switch>
    </div>
</Router>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))


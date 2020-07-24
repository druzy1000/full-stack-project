import React from "react";
import {Browser} from 'react-kawaii';
class NonExistentPage extends React.Component {
  render() {
    return (
      <div className="container">
         <div className="NoPage">
        {" "}
        <h1>404</h1>
        <p>Page doesn't exist</p>
        <Browser size={400} mood="ko" color="#FDA7DC" />

        </div>
      </div>
    );
  }
}
export default NonExistentPage;
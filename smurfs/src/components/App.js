import React from "react";
import "./App.scss";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = () => {
  return (
    <div className="App">
      <h1>Welcome To Your Smurf Village!</h1>
      <SmurfForm />
      <SmurfList />
    </div>
  );


}

export default App;

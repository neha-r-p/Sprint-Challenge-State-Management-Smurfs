import React from "react";
import "./App.scss";

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfForm />
      <SmurfList />
    </div>
  );


}

export default App;

import React, { useState } from "react";
import axios from "axios";

const submitHandler = event => {
  console.log("submit button clicked");
  event.preventDefault();
  console.log(newSmurf);
  event.target.reset();

  //   axios.post('http://localhost:3333/smurfs', form)
};

const changeHandler = event => {
    
        setNewSmurf(event.target.name = event.target.value)
    
   
      
    }

const SmurfForm = () => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now()
  });

  return (
    <form onSubmit={submitHandler}>
      <h3>Create a Smurf!</h3>
      <label>
        Smurf Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={newSmurf.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Smurf Age:
        <input
          type="number"
          name="age"
          placeholder="age"
          value={newSmurf.age}
          onChange={changeHandler}
        />
      </label>
      <label>
        Smurf Height:
        <input
          type="text"
          name="height"
          placeholder="height (e.g. 5cm)"
          value={newSmurf.height}
          onChange={changeHandler}
        />
      </label>
      <button>Add to Village</button>
    </form>
  );
};

export default SmurfForm;

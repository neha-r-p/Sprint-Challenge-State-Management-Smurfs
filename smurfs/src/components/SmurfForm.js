import React, { useState } from "react";

const submitHandler = event => {
  console.log("submit button clicked");
  event.preventDefault();
  event.target.reset();
};

const SmurfForm = () => {
  const [form, setForm] = useState();

  return (
    <form onSubmit={submitHandler}>
      <h3>Create a Smurf!</h3>
      <label>
        Smurf Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={event => {
            setForm(event.target.value);
          }}
        />
      </label>
      <label>
        Smurf Age:
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={event => {
            setForm(event.target.value);
          }}
        />
      </label>
      <label>
        Smurf Height:
        <input
          type="text"
          name="height"
          placeholder="height (e.g. 5cm)"
          onChange={event => {
            setForm(event.target.value);
          }}
        />
      </label>
      <button>Add to Village</button>
    </form>
  );
};

export default SmurfForm;

import React, { useState } from "react";

const SmurfForm = () => {
  return (
    <form>
      <h3>Create a Smurf!</h3>
      <label>
        Smurf Name:
        <input type="text" placeholder="name" />
      </label>
      <label>
        Smurf Age:
        <input type="text" placeholder="age" />
      </label>
      <label>
        Smurf Height:
        <input type="text" placeholder="height" />
      </label>
      <button>Add to Village</button>
    </form>
  );
};

export default SmurfForm;

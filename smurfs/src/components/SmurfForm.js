import React, { useState } from 'react';

const SmurfForm = () => {
    return(
        <form>
            <h3>Create a Smurf!</h3>
            <label>Smurf Name:
            <input type="text" placeholder="name" />
            </label>
            <button>Add to Village</button>
        </form>
    )
}

export default SmurfForm;
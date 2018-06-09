import React from 'react';

import '../../../styles/weather-css/form.css'

const Form = (props) => {
  return(
    <form onSubmit={props.getInput}>
      <input type='text' name='city' placeholder='City...'/>
      <input type='text' name='country' placeholder='Country...'/>
      <button>Get Weather</button>
    </form>
  )
}

export default Form;

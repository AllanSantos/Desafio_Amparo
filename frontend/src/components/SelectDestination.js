import React from 'react';

export default function SelectDestination({ArrDestination}) {
  return (
    <select name="destination" id="destination" ArrDestination={ArrDestination}>
      <option name="" value=""></option>
      {ArrDestination.map(arr => 
        <option name={arr.destination} value={arr.destination}>{arr.destination}</option>
      )};
    </select>
  );
}
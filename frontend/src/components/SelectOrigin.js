import React from 'react';

export default function SelectOrigin({ArrOrigin}) {
  return (
    <select name="origin" id="origin" ArrOrigin={ArrOrigin}>
      <option name="" value=""></option>
      {ArrOrigin.map(arr => 
        <option name={arr.origin} value={arr.origin}>{arr.origin}</option>
      )};
    </select>
  );
}
import React from 'react';

export default function SelectProducts({ArrProd}) {
  return (
    <select name="products" id="products" ArrProd={ArrProd}>
      <option name="" value=""></option>
      {ArrProd.map(arr => 
        <option name={arr.package_name} value={arr.package_name}>{arr.package_name}</option>
      )};
    </select>
  );
}
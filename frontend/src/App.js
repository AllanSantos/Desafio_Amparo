import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';

import api from './services/api';

import './App.css';

import Header from './components/Header';
import SelectProducts from './components/SelectProducts';
import SelectOrigin from './components/SelectOrigin';
import SelectDestination from './components/SelectDestination';

function App() {

  const [Prod, setProd] = useState([]);
  const [Price, setPrice] = useState([]);
  const [Simulation, setSimulation] = useState([]);

  useEffect(() => {
    api.get('products').then(product => {
      setProd(product.data);
    })

    api.get('prices').then(price => {
      setPrice(price.data);
    })
  }, [])

  async function handleGetSimulation(origin, destination, package_name, time) {
    console.log("clicou", origin, destination, package_name, time)

    const response = await api.post('simulations', {
      origin, destination, package_name, time
    });

    const retSimulation = response.data;

    setSimulation(retSimulation);

  }

  return (
    <>
      <Header title="Amparo"/>
      {console.log(Price)}
      <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Origem</TableCell>
            <TableCell>Destino</TableCell>
            <TableCell>Tempo</TableCell>
            <TableCell>Plano FaleMais</TableCell>
            <TableCell>Com o Plano</TableCell>
            <TableCell>Sem o Plano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell id="cellOrigem">
              <SelectOrigin id="origem" ArrOrigin={Price}/>
            </TableCell>
            <TableCell>
            <SelectDestination id="destino" ArrDestination={Price}/>
            </TableCell>
            <TableCell>
              <Input id="tempo" type="number"></Input>
            </TableCell>
            <TableCell>
            <SelectProducts ArrProd={Prod}/>
            </TableCell>
            <TableCell>
              {Simulation.withPlan}
            </TableCell>
            <TableCell>
              {Simulation.withoutPlan}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => handleGetSimulation(
          document.getElementById("origin").value,
          document.getElementById("destination").value,
          document.getElementById("products").value,
          parseInt(document.getElementById("tempo").value),
        )}
      >
        Simular valor
      </Button>
  </>
  )
}

export default App;
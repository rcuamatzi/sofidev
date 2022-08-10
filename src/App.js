import logo from './logo.svg';
import './App.css';
import {API} from 'aws-amplify';
import { useState, useEffect } from 'react';
// const response = await API.get('nodeapi', '/nodeApi');
// console.log(response);
const myApi = "api3866e252";
const apiPath = "/costomers";

function App() {
  const [input , setInput] = useState("");
  const [customers , setCustomers] = useState([]);

  useEffect( () =>{
    api();
  },[]);

  const api = async () =>{
    try{
      const response = await API.get('nodeApi', '/getUsers');
      console.log('hola estoy en ejecución desde petición del api');
      console.log(response);
    }catch(e){
      console.log('ocurrio un error' + e)
    }
  }

  const getCustomer = (e)=>{
    let customerId = e.input;
    API.get(myApi, apiPath +"/"+ customerId ).then(response => {
      let newCustomers = [...customers];
      newCustomers.push(response);
      setCustomers(newCustomers);
    }).catch(error=>{
      console.log(`hubo un error ${error}`);
    })
  }
  return (
    <div className="App">
      <h1>Simple React app</h1>
      <div>
        <input placeholder='customer id' type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      </div>
      <br/>
      <button onClick={() => getCustomer({input})}>Get Customer From Backend</button>
      <h2 style={{visibility : customers.length > 0 ? 'visible' : 'hidden'}}>Response</h2>
      {
        customers.map((thisCustomer, index)=>{
          return (
            <div key={thisCustomer.customerId}>
              <span><b>customerId: </b> {thisCustomer.customerId} <b>CustomerName:</b> {thisCustomer.customerName}</span>
            </div>
          )
        })
      }
      
      <button onClick={api}>peticion API</button>
      
    </div>
  );
}

export default App;

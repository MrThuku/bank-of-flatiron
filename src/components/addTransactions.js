import React, { useState } from 'react'

let transactionsDetails = {};

const AddTransaction = ({transactions, setTransactions}) => {
  const [dataToSend, setDataToSend] = useState(transactionsDetails);

  const handleDataToSend = (e)=>{
    transactionsDetails[e.target.name] = e.target.value;
  }

  const sendToDatabase = (e)=>{
    e.preventDefault();
    fetch('http://localhost:3001/transactions', {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'Application/Json'
      }

    })
    .then(res => res.json())
    .then(res => setTransactions([...transactions, res]))
  }

  return (
    <form onSubmit={sendToDatabase}>
      <input type='date' name='date' onChange={(e)=> handleDataToSend(e)}/>
      <input type='text' name='description' placeholder='description' onChange={(e)=> handleDataToSend(e)}/>
      <input type='text' name='category' placeholder='category' onChange={(e)=> handleDataToSend(e)}/>
      <input type='number' name='amount' placeholder="amount" onChange={(e)=> handleDataToSend(e)}/>
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default AddTransaction
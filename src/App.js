import './App.css';
import Search from './components/search';
import AddTransactions from './components/addTransactions';
import DisplayTrasactions from './components/displayTrasactions';
import { useEffect, useState } from 'react';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/transactions')
      .then((res)=>res.json())
      .then((res)=>{
        setTransactions(res);
      })
  }, [])


  return (
    <>
      <Search setTransactions={setTransactions}/>
      <AddTransactions transactions={transactions} setTransactions={setTransactions}/>
      <DisplayTrasactions transactions={transactions}/>
      
    </>
  );
}

export default App;

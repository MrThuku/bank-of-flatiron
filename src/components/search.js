import React, { useState, useEffect } from 'react'

const Search = ({setTransactions}) => {
  const [search, setSearch] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3001/transactions')
      .then((res)=>res.json())
      .then((res)=>{
        setSearch(res);
      })
  }, [])

  const handleSetSearch = (e)=>{
    let value = e.target.value;

    const filteredResults = search.filter((element) => {
      if (element.id.toString().indexOf(value) != -1 || element.description.toString().indexOf(value) != -1 || element.date.toString().indexOf(value) != -1 || element.amount.toString().indexOf(value) != -1 || element.category.toString().indexOf(value) != -1) {
        return element;
      }
    })

    setTransactions(filteredResults);
  }

  return (
    <form>
      <input type='text' name="search" placeholder="Search..." onChange={handleSetSearch}/>
    </form>
  )
}

export default Search
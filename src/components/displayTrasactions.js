import React from 'react'

const DisplayTrasactions = ({transactions}) => {
  return (
    <section className='displayTransactions'>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
        {
          transactions.map((element)=>{
            return (
              <tr className='singleTransaction' key={element.id}>
                  <td>{element.id}</td>
                  <td>{element.date}</td>
                  <td>{element.description}</td>
                  <td>{element.category}</td>
                  <td>{element.amount}</td>
              </tr>
            )
          })
        }

        </tbody>
      </table>
    </section>
  )
}

export default DisplayTrasactions
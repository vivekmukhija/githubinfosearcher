import React, { useEffect } from 'react'
import { useState } from 'react';
import axios, { all } from 'axios'
import Cards from './components/Cards';

const App = () => {
  const [username, setuserName] = useState('');
  const [inputVal, setinputVal] = useState('');
  const [allData, setallData] = useState([]);
  const [searched, setSearched] = useState(false)
  const [loading, setloading] = useState(false);

  function submit(e) {
    e.preventDefault()
    if (inputVal === "") { alert("please Enter Username") }
    else {
      setuserName(inputVal)
      setSearched(true)
    }
  }

  const getData = async () => {
    if (!username) return

    setloading(true)

    console.log("submit")
    const response = await axios.get(`https://api.github.com/users/${username}`)
    console.log(response.data);

    setallData(response.data)
    setloading(false)
    setinputVal('')
  }
  useEffect(function () {
    if (!username) return
    getData()
  }, [username])
  return (
    <div className='container'>
      <form onSubmit={(e) => {
        submit(e)
      }}>
        <div className='input'>

          <input value={inputVal} required type="text" onChange={(e) => {
            setinputVal(e.target.value)
          }}></input>
          <i>Github Id</i>
        </div>
        <button>Get Information</button>
      </form>

      <Cards allData={allData} searched={searched} loading={loading} />
    </div>
  )
}

export default App


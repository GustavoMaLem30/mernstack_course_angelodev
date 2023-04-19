import React, { useState,useEffect } from 'react'
import axios from 'axios'
const UserList = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('http://localhost:4000/api/users')
      setList(res.data)
    }
    getUsers();
  }, [list])
  return (
    <div className='row'>
      {
        list.map(list => (
          <div className='col-md-4 p-2' key={list._id}>
            <div className='card'>
              <div className='card-header'>
                <h5>Name: {list.name}</h5>
              </div>
              <div className='card-body'>
                <p>Lastname: {list.lastname}</p>
                <p>Age: {list.age}</p>
                <p>Phone: {list.phone}</p>
                <p>Email: {list.Email}</p>
              </div>
              <div className='card-footer'>
                <button className='btn btn-danger'>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default UserList

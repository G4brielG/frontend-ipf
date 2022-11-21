import React from 'react'
import Navbar from '../layouts/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/loginActions'

const Personas = () => {
  const { loading, personas, message } = useSelector((state) => state.login);
  const dispatch = useDispatch()
  
  return (
    <>
      <div className='container' style={{ magin: 0, padding: 0, marginLeft: 0, marginRight: 0 }}>
      <div className='row'>
        <div className='col'>
          <Navbar />
        </div>
        <div className='col-5'>
          <h3>Personas</h3>
          <table className='table'>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Personas
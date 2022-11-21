import React from 'react'
import Navbar from '../layouts/Navbar'

const Home = () => {
  return (
    <>
      <div className='container' style={{ magin: 0, padding: 0, marginLeft: 0, marginRight: 0 }}>
        <div className='row'>
          <div className='col'>
            <Navbar />
          </div>
          <div className='col-5'>
            <div>Home</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
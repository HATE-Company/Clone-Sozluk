import React from 'react'

function Loginbox() {
  return (
    <div className='loginBox'>
      <div className="col-lg-11 mx-auto">
        <div className="row align-items-center">
          <div className="col-lg-3"></div>
          <div className="col text-center">
            <div className="text">Create an account to follow your favorite communities and start taking part in conversations.</div>
          </div>
          <div className="col-lg-3 text-lg-end text-center mt-lg-0 mt-3">
            <button className='btn'>Log In</button>
            <button className='btn bg-danger'>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginbox
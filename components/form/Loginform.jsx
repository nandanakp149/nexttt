import React from 'react'

function Loginform(props) {
  return (
    <>
    <h1>Login data</h1>
    <p>username: {props.formname}</p>
    <p>password: {props.formpassword}</p>
    </>
  )
}

export default Loginform
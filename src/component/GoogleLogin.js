import React from 'react'
import "./css/GoogleLogin.css"
import { Login } from "../firebaseConfig.js"

function GoogleLogin() {
  return (
    <div onClick={login}>Login with Google</div>
  )
}

export default GoogleLogin
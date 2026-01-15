import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userName} = useParams();
  return (
    <>
        <h2>Hello Mr.{userName}</h2> 
    </>
  )
}

export default User

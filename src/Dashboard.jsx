import React from 'react'
import { useSelector } from 'react-redux';


function Dashboard() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if(!isLoggedIn) {
        return;
    }
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard
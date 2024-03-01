import React from 'react'
import { useSelector } from 'react-redux';

function Dashboard() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if(!isLoggedIn) {
        return;
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
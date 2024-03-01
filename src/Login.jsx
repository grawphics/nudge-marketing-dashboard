// src/components/Login.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './features/auth/authSlice'; // Ensure this import path is correct

export default function Login() { // Renamed the component to Login
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const role = e.target.elements.role.value;

    // This dispatches the async thunk action creator
    dispatch(loginUser({ email, password, role }));
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2 px-6 py-12 mx-auto my-auto text-gray-800 bg-gray-300">
            <p>Login</p>
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <select name="role">
              <option value="owner">Owner</option>
              <option value="co-owner">Co-owner</option>
            </select>
            <button type="submit" className="w-24 text-white bg-blue-600 rounded-sm px-auto">
              {isLoading ? 'Wait ...' : 'Login'}
            </button>
          </form>
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

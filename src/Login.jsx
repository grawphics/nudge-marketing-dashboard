import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './features/auth/authSlice'; 
import Button from './components/Button';
import Input from './components/Input';




export default function Login() { 
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
            <Input type="email" placeholder="Email" name="email" />
            <Input type="password" placeholder="Password" name="password" />
            <select name="role">
              <option value="owner">Owner</option>
              <option value="co-owner">Co-owner</option>
            </select>
            <Button type="submit" variant={'primary'}>
              {isLoading ? 'Wait ...' : 'Login'}
            </Button>
          </form>
        </div>
      )}
      {error && <p>{error}</p>}
    </>
  );
}

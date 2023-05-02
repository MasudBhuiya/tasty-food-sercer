import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Active from '../Active/Active';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  // console.log(user);
  const handleLogout = ()=>{
    logOut()
    .then()
    .catch(error=>{
      
    })
  }
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Active to="/">Home</Active></li>
        <li><Active to="/blog">Blog</Active></li>
        <li><Active to="/login">Login</Active></li>
        <li><Active to="/Register">Register</Active></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl text-orange-500">Tasty Foods</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Active to="/">Home</Active></li>
        <li><Active to="/blog">Blog</Active></li>
        <li><Active to="/login">Login</Active></li>
        <li><Active to="/Register">Register</Active></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
        user ?  <span className='flex'><img style={{height: '30px', width: '30px', marginTop:'5px' ,borderRadius: '50%'}} title={user.displayName} src={user.photoURL} alt="" /><button className='bg-red-500 rounded px-3 py-2 text-white me-2 ms-2' onClick={handleLogout}>LogOut</button></span> : <button className='bg-red-500 rounded px-3 py-2 text-white me-2 '><Link to='/login'>Login</Link></button>
    }
  </div>
</div>
    );
};

export default Header;
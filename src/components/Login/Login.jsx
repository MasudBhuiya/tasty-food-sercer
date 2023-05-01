import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const [error, setError]= useState(null);
    const handleLogin =(e)=>{
        setError('')
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset()
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    return (
        <form onSubmit={handleLogin} className='p-4 text-center' >
            <h2 className='text-3xl font-semibold mb-5'>Please Login</h2>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type="password" placeholder="Enter password" name="password" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <br />
            <p>New to this site? please <Link to="/register" className="btn btn-active btn-link pl-0">Register</Link></p>
            <br />
            <br />
            <p>{error}</p>
            <br />
            <input className='bg-sky-400 px-12 py-3 rounded font-bold text-white' type="submit" name="login" value="Login" id="" />
            </form>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [show, setShow] = useState(false)
    const {loginUser, googleUser, githubUser} = useContext(AuthContext);
    const [error, setError]= useState(null);
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location);
    const page = location.state?.form?.pathname;
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
            navigate(page)
            form.reset();
        })
        .catch(error => {
            console.log(error);
            // setError(error.message)
        })
        
    }
    const handleGoogle = ()=>{
        googleUser()
        .then(result=>{
            navigate(page)
        })
        .catch(error=> {
            setError(error.message)

        })
    }
    const handleGithub = ()=>{
        githubUser()
        .then(res=>{
            navigate(page)
        })
        .catch(error => setError(error.message))
    }
    return (
        <form onSubmit={handleLogin} className='p-4 text-center' >
            <h2 className='text-3xl font-semibold mb-5'>Please Login</h2>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type={show ? "text" : "password"} placeholder="Enter password" name="password" className="input input-bordered input-info w-full max-w-xs mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide Password</Link>: <Link className='border rounded p-1'>Show Password</Link>
                }
            </p>
            <br />
            <p>New to this site? please <Link to="/register" className="btn btn-active btn-link pl-0">Register</Link></p>
            <br />
            <p className='text-semibold mb-2'>Else Login with_</p>
            <button onClick={handleGoogle} className="btn btn-outline btn-info mr-3">Google</button>
            <button onClick={handleGithub} className="btn btn-outline btn-info">GitHub</button>
            <br />
            <p className='text-yellow-500'>{error}</p>
            <br />
            <input className='bg-sky-400 px-12 py-3 rounded font-bold text-white' type="submit" name="login" value="Login" id="" />
            </form>
    );
};

export default Login;
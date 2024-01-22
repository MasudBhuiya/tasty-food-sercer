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
    const page = location.state?.form?.pathname || '/';
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
        <div className='grid md:grid-cols-2 justify-center items-center gap-12 max-w-[1440px] my-48 mx-auto'>
            <div>
        <img className='max-w-' src="https://s3-alpha-sig.figma.com/img/568e/9472/340b23f84e1940c64659bc58c9bbdf66?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZV8Dabl2ItxB8KG2s25E9RpcDiQpruqqbf9kSEA24ormuYV1HtAVEMZ9k1-cPIsmKtVEUuiumpD-CnbQte2lu~lcnIFL5SwjYJpAiqdAosiPE~S2KzFC9QkUldZOlOdlORJMq4VAsAkGD-yqhBpy5VVw-nU-K6rUv02QW1RJyyn~YNHG0~fptXzW4FIMmXcLjPKtzl~f0M-3Nf0WwZY9I~X7SwnsF3G5K-DhqmGB40hbAoxG-V5D35wVxOL9ZPVkmj-4YmjOxct1x74Nr-woH4hKDJDxweTjuIzIN-aKyNIkGbd~pFcxbfDf4Lh39YBHgjPTAJdR0mgmKb72yqsjw__" alt="" />
            </div>
            <div>
            <form onSubmit={handleLogin} className='' >
            <h2 className='text-3xl font-semibold mb-5'>Please Login</h2>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type={show ? "text" : "password"} placeholder="Enter password" name="password" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide Password</Link>: <Link className='border rounded p-1'>Show Password</Link>
                }
            </p>
            <input className='bg-sky-400 px-12 btn btn-block max-w-md border-none py-3 rounded mt-4 font-bold text-white' type="submit" name="login" value="Login" id="" />
            </form>
            <p>New to this site? please <Link to="/register" className="btn btn-active btn-link pl-0">Register</Link></p>
            <br />
            <p className='text-semibold mb-2'>Else Login with_</p>
            <div className=' flex max-w-md justify-between'>
            <button onClick={handleGoogle} className="btn btn-outline w-[48%]  btn-info ">Google</button>
            <button onClick={handleGithub} className="btn btn-outline w-[48%]  btn-info">GitHub</button>
            </div>
            <br />
            <p className='text-yellow-500'>{error}</p>
            <br />
            
            </div>
        </div>
    );
};

export default Login;
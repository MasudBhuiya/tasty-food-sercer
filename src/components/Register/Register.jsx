import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {registerUser, googleUser, githubUser} = useContext(AuthContext);
    const [error, setError]= useState(null);
    const [show, setShow] = useState(false)
    const handleRegister =(e)=>{
        setError('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            setError('Password is less then 6 characters');
            return;
        }

        registerUser(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            profile(loggedUser, name, photo)
        })
        .catch(error => {
            console.log(error);
            setError(error.message)
        })
    }
    const profile = (loggedUser, name, photo)=>{
        return updateProfile(loggedUser, {
            displayName: name, photoURL: photo
        })
    }
    const handleGoogle = ()=>{
        googleUser()
        .then(result=>{})
        .catch(error=> {
            setError(error.message)
        })
    }
    const handleGithub = ()=>{
        githubUser()
        .then(res=>{})
        .catch(error => setError(error.message))
    }
    return (
            <div className='grid md:grid-cols-2 justify-center items-center gap-12 max-w-[1440px] my-48 mx-auto'>
                <div>
                <img className='max-w-' src="https://s3-alpha-sig.figma.com/img/568e/9472/340b23f84e1940c64659bc58c9bbdf66?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HZV8Dabl2ItxB8KG2s25E9RpcDiQpruqqbf9kSEA24ormuYV1HtAVEMZ9k1-cPIsmKtVEUuiumpD-CnbQte2lu~lcnIFL5SwjYJpAiqdAosiPE~S2KzFC9QkUldZOlOdlORJMq4VAsAkGD-yqhBpy5VVw-nU-K6rUv02QW1RJyyn~YNHG0~fptXzW4FIMmXcLjPKtzl~f0M-3Nf0WwZY9I~X7SwnsF3G5K-DhqmGB40hbAoxG-V5D35wVxOL9ZPVkmj-4YmjOxct1x74Nr-woH4hKDJDxweTjuIzIN-aKyNIkGbd~pFcxbfDf4Lh39YBHgjPTAJdR0mgmKb72yqsjw__" alt="" />
                </div>
                <div>

                <form onSubmit={handleRegister} className='p-4' >
            <h1 className='text-3xl font-semibold mb-5'>Please Register</h1>
            <p className='text-xl'>Your Name:</p>
            <input type="text" placeholder="Your Name" name="name" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p className='text-xl'>Photo URL:</p>
            <input type="text" placeholder="Image URL" name="photo" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p className='text-xl'>Your Email:</p>
            <input type="email" placeholder="Enter email" name="email" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p className='text-xl'>Password:</p>
            <input type={show ? "text" : "password"} placeholder="Enter password" name="password" className="input input-bordered input-info w-full max-w-md mb-4" required/>
            <p onClick={()=>setShow(!show)}>
                {
                    show ? <Link className='border rounded p-1'>Hide Password</Link>: <Link className='border rounded p-1'>Show Password</Link>
                }
            </p>
            <input className='bg-sky-400 px-12 btn btn-block max-w-md border-none py-3 rounded mt-4 font-bold text-white' type="submit" name="login" value="Register" id="" />
            <p>If you already sign out!!! go <Link to="/login" className="btn btn-active btn-link pl-0">Login</Link></p>
            <p className='text-semibold mb-2'>Else register with_</p>
            <div className=' flex max-w-md justify-between'>
            <button onClick={handleGoogle} className="btn btn-outline w-[48%]  btn-info ">Google</button>
            <button onClick={handleGithub} className="btn btn-outline w-[48%]  btn-info">GitHub</button>
            </div>
            <br />
            
            <p className='text-yellow-400'>{error}</p>
            <br />
            
            </form>
                </div>
            </div>
        
    );
};

export default Register;
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import pic from "../assets/MainBefore.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';



const Login = () => {

  const navigate=useNavigate();
   
  const [credentials,setCredentials]=useState({
      username:'',
      email:'',
      password:''
  })
      const [loading, setLoading] = useState(false)
  
  
  const submitHandle=(e)=>{
      e.preventDefault()
      setLoading(true)
signInWithEmailAndPassword(auth, credentials.email, credentials.password)
  .then((userCredential) => {
    // Signed in 
    setLoading(false)

    const user = userCredential.user;
    console.log(user, 'logged in');
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });      
  }

  return (
 
 <section class="bg-gray-100 min-h-screen flex box-border justify-center items-center">
    <div class="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center">
        <div class="md:w-1/2 px-8">
            <h2 class="font-bold text-3xl text-[#002D74]">Login</h2>
            <p class="text-sm mt-4 text-[#002D74]">If you already a member, easily log in now.</p>

            <form action="" onSubmit={(e)=>submitHandle(e)} class="flex flex-col gap-4">
                <input class="p-2 mt-8 rounded-xl border" type="email" name="email" onChange={(e)=>{setCredentials({...credentials,email:e.target.value})}} placeholder="Email"/>
                <div class="relative">
                    <input class="p-2 rounded-xl border w-full" type="password" name="password" onChange={(e)=>{setCredentials({...credentials,password:e.target.value})}} id="password" placeholder="Password"/>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-eye-slash-fill absolute top-1/2 right-3 -z-1 -translate-y-1/2 cursor-pointer hidden"
                        id="mama" viewBox="0 0 16 16">
                        <path
                            d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z">
                        </path>
                        <path
                            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z">
                        </path>
                    </svg>
                </div>
                <button class="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 flex justify-center duration-300 hover:bg-[#206ab1] font-medium" disabled={loading} type="submit">{loading?((<svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                        </svg>) ):('Login')}</button>
            </form>
            

            <div class="mt-4 text-sm flex justify-between items-center container-mr">
                <p class="mr-3 md:mr-0 ">If you don't have an account..</p>
                <button class="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300" onClick={()=>navigate('/SignUp')}>Register</button>
            </div>
        </div>
        <div class="md:block hidden w-1/2">
            <img class="rounded-2xl max-h-[1600px]" src="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxmcmVzaHxlbnwwfDF8fHwxNzEyMTU4MDk0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="login form image"/>
        </div>
    </div>
</section>
    
  )
}

export default Login

import {useState} from 'react'
const LoginForm = ({setIsNew})=>{

    const [existingUser,setExistingUser] = useState({
        username:"",
        password:""
    })

    //event handler to handle form submit event
    const handleSubmit = e=>{
        e.preventDefault();
        alert("Form is Submitted")
        setExistingUser({username:"",password:""});

    }

    return (
      <div className='container mt-3 text-bg-dark w-50 p-3 rounded'>
        <h2 className='text-center' style={{textDecoration:'underline'}}>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input className='form-control' value={existingUser.username}
                onChange={(e) =>setExistingUser({...existingUser,username:e.target.value}) }
                
                placeholder='USERNAME' required/>
            </div>
            <div className='mb-3'>
                <input className='form-control' type='password' value={existingUser.password}
                onChange={(e) =>setExistingUser({...existingUser,password:e.target.value})}
                placeholder='PASSWORD' required/>
            </div>
            <div className='text-center mb-2'>
                <button className='btn btn-outline-light me-2' type='submit'>Login</button>
                <button className='btn btn-outline-light' type='reset' onClick={() =>{
                    setExistingUser({username:"",password:""})
                }}>Reset</button>
            </div>
        </form>
        <h5 className='text-center mt-3'>New User? <button className='btn btn-outline-light' onClick={()=> setIsNew(true) }>Please Register</button></h5>
      </div>
    );

};
export default LoginForm;
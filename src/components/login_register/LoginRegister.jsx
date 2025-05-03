import {useState} from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
const LoginRegister=()=>{
 
    const [isNew,setIsNew] = useState(false);

    return (
        <div>
            {isNew ? 
            <RegisterForm setIsNew={setIsNew}/> 
          : <LoginForm setIsNew={setIsNew}/>
            }
        </div>
    );

};
export default LoginRegister;

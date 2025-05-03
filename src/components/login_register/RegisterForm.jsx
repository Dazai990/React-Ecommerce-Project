import { MdModeEdit } from "react-icons/md";
import { useState } from "react";

const RegisterForm = ({setIsNew})=>{
 const[newUser,setNewUser] = useState({

    fullName:"",
    age:"",
    gender:"",
    hobbies:[],
    qualification:"",
    mobileNo:"",
    emailAddress:"",
    userName:"",
    password:"",
    confirmPassword:""
 })
 const [isSubmitted,setIsSubmitted] = useState(false)
 const [warning, setWarning] = useState('');

 //event handleer to handle form submit
 const handleSubmit = e=>{
   e.preventDefault();
   if (newUser.password !== newUser.confirmPassword) {
      setWarning()
      alert("Your Confirm Password Field doesn't Match!")
      return;
   }
   alert("You have successfully registered");
   setIsSubmitted(true)
 }
 //event handler for checkboxes
 const handleHobbies =e=>{
   const {checked,value} = e.target;
   if(checked){
      setNewUser({...newUser,hobbies:[...newUser.hobbies,value]})
   }else{
      setNewUser({...newUser,hobbies:newUser.hobbies.filter(hobby=>hobby!==value)})
   }
 }
 return(
<>
   {!isSubmitted && <div className="container text-bg-danger mt-3 p-3 rounded w-50">
        <h2>Register Form</h2>
        {warning}
        <div className="text-start">
        <form onSubmit={handleSubmit}>
         <div className="mb-3">
            <label className="form-label" htmlFor="fn">Full Name:</label>
            <input className="form-control" id="fn" value={newUser.fullName}
            onChange={(e) =>setNewUser({...newUser,fullName:e.target.value})} required/>
         </div>
         <div className="mb-3">
    <label className="form-label"  htmlFor="ag">Age:</label>
    <input className="form-control" type="number" id="ag" value={newUser.age}
    onChange={(e) => setNewUser({...newUser,age:e.target.value})} required/>
         </div>
         <div className="mb-3">
            <label className="form-label">Gender:</label>
            <div className="form-check">
               <input id="g1" className="form-check-input" type="radio" name="gender" value="Male" checked={newUser.gender==="Male"}
               onChange={e=>setNewUser({...newUser,gender:e.target.value})} required/>
               <label htmlFor="g1" className="form-check-label">Male</label>
            </div>
            <div className="form-check">
               <input id="g2" className="form-check-input" type="radio" name="gender" value="Female" checked={newUser.gender==="Female"}
               onChange={e=>setNewUser({...newUser,gender:e.target.value})}/>
               <label htmlFor="g2" className="form-check-label">Female</label>
            </div>
         </div>
         <div className="mb-3">
            <label>Select Your Hobbies:</label>
            <div className="form-check">
            <input id="hb1"className="form-check-input" type="checkbox" name="hobbies" value="Singing"
             checked={newUser.hobbies.includes("Singing")}
             onChange={handleHobbies}/>
            <label htmlFor="hb1" className="form-check-label">Singing</label>
            </div>
            <div className="form-check">
            <input id="hb2"className="form-check-input" type="checkbox" name="hobbies" value="Dancing"
             checked={newUser.hobbies.includes("Dancing")}
             onChange={handleHobbies}/>
            <label htmlFor="hb2" className="form-check-label">Dancing</label>
            </div>
            <div className="form-check">
            <input id="hb3"className="form-check-input" type="checkbox" name="hobbies" value="Cricket"
             checked={newUser.hobbies.includes("Cricket")}
             onChange={handleHobbies}/>
            <label htmlFor="hb3" className="form-check-label">Cricket</label>
            </div>
            <div className="form-check">
            <input id="hb4"className="form-check-input" type="checkbox" name="hobbies" value="Trecking"
             checked={newUser.hobbies.includes("Trecking")}
             onChange={handleHobbies}/>
            <label htmlFor="hb4" className="form-check-label">Trecking</label>
            </div>
         </div>
         <div className="mb-3">
            <label className="form-label" htmlFor="qu">Select Qualification:</label>
            <select className="form-select" id="qu" value={newUser.qualification} onChange={e=>setNewUser({...newUser,qualification:e.target.value})} required>
               <option disabled selected value="">--select--</option>
               <option>BCA</option>
               <option>BBA</option>
               <option>MCOM</option>
               <option>MBA</option>
               <option>M.Tech</option>
               <option>M.E</option>
            </select>

         </div>
         <div className="mb-3">
            <label className="form-label" htmlFor="ph">Mobile.No:-</label>
            <input type="tel" id="ph" value={newUser.mobileNo} onChange={e=>setNewUser({...newUser,mobileNo:e.target.value})} pattern="[0-9]{10}" required placeholder="9100000000"/>
         </div>
         <div className="mb-3">
          <label className="form-label" htmlFor="em">Email Id:</label>
          <input className="form-control" id="em" value={newUser.emailAddress} onChange={e=>setNewUser({...newUser,emailAddress:e.target.value})} placeholder="abc.xyz@gmail.com" required/>
         </div>
         <div className="mb-3">
            <label htmlFor="us" className="form-label">UserName:</label>
            <input type="text" id="us" className="form-control" placeholder="username" value={newUser.userName} onChange={e=>setNewUser({...newUser,userName:e.target.value})} required />
         </div>
         <div className="mb-3">
            <label htmlFor="pass" className="form-label">Password:</label>
            <input type="password" className="form-control" placeholder="password" value={newUser.password} onChange={e=>setNewUser({...newUser,password:e.target.value})} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!&$#^]).{6,10}" required/>
         </div>
         <div className="form-text text-light">
            Password must contain at least one digit, one lowercase,one uppercase alphabet, any symbols @!&$#^ length must be 6 to 10 characters.
         </div>
         <div className="mb-3">
            <label htmlFor="cpass" className="form-label">Confirm Password:</label>
            <input type="password" id="cpass" className="form-control" placeholder="password" value={newUser.confirmPassword} onChange={e=>setNewUser({...newUser,confirmPassword:e.target.value})} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@!&$#^]).{6,10}" required/>
         </div>
         <div className="text-center mb-3">
            <button className="btn btn-outline-light me-3" type="sumbit">Save</button>
            <button className="btn btn-outline-light" type="reset">Reset</button>
         </div>
        </form>
        </div>
        <h4>Already a User? Please<button className="btn btn-outline-light" onClick={()=> setIsNew(false)}>Login</button>  </h4>
    </div> }

     {isSubmitted && 
     <div className="container text-bg-warning border rounded mt-3 p-3 w-75">
     <h1 className="text-center">User Details</h1>
     <h2>FullName: {newUser.fullName}</h2>
     <h2>Age: {newUser.age}</h2>
     <h2>Gender :{newUser.gender}</h2>
     <h2>Hobbies :</h2>
     <ul>
      {newUser.hobbies.map(hobby=>
         <li key={hobby}>{hobby}</li>
      )}
     </ul>
     <h2>Qualification:{newUser.qualification}</h2>
     <h3>Mobile.No:{newUser.mobileNo}</h3>
     <h3>Email Address:{newUser.emailAddress}</h3>
     <h3>UserName:{newUser.userName}</h3>
     <h3>Password:{newUser.password}</h3>
     <h3>Password:{newUser.confirmPassword}</h3>
     <button title="Edit" className="btn btn-outline-light mt-2" onClick={() => setIsSubmitted(false)}><MdModeEdit /></button>
    </div> }
            </>
 )
};
export default RegisterForm;
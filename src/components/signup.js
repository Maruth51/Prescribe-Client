import React,{useState, Fragment} from 'react';
import { Button, Alert } from 'react-bootstrap';
import { registerUser } from '../utils/userService';
import { useHistory } from 'react-router-dom';


function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conformPass, setConformPass] = useState('')
    const [issubmit, setSubmit] = useState(false)
    const [regFail, setregFail] = useState(false)
    const history = useHistory()

    const handleSubmit =(event)=>{
        const form = event.target
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
          }else{
          form.classList.remove("was-validated");
          event.preventDefault();
          setSubmit(true)
          registerUser(email.password).then((data)=>{
            setSubmit(false)
            if (!data.error){
                setregFail(false)
            localStorage.setItem("token",data.token)
            console.log(data)
            history.push('/main')
            }else{
              setregFail(true)
            }

        }).catch((error)=>{
        })

          }


        
    }
    return (
        <Fragment>
             {regFail && <div className="alert alert-danger" style={{fontSize:'14px', fontWeight:"bold"}} role="alert">
             Email already in use
</div>}
        <form id="register-form" action="#" className='needs-validation' onSubmit={handleSubmit} noValidate>
                  <div className="form-group" onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" tabIndex="1" onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email" value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
                    <div className='invalid-feedback' style={{fontSize:'12px'}}>{email.length===0 ? "Email is Required" : "Invalid Email"}</div>

                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="password" tabIndex="2" onChange={(e)=>{setPassword(e.target.value)}} value={password} className="form-control" placeholder="Password" minLength='8' required/>
                    <div className='invalid-feedback' style={{fontSize:'12px'}}>{password.length===0 ? "Password is Required" : "Minimun 8 Character"}</div>
                  
                  </div>
                  <div className="form-group">
                    
                    <input type="password" name="confirm-password" id="confirm-password" tabIndex="2" onChange={(e)=>{setConformPass(e.target.value)}} value={conformPass} className={`form-control ${password!==conformPass ? ' is-invalid' :''}`}  placeholder="Confirm Password" minLength='8'required/>
                    <div className='invalid-feedback' style={{fontSize:'12px'}}>Should Match Password</div>

                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
    <Button type='submit' variant='success'size='lg'className='btn-login' style={{fontSize:'20px' }} disabled={issubmit} block>{issubmit ? 'Loading...':"Register"}</Button>

                      </div>
                    </div>
                  </div>
                </form>
            </Fragment>
    )
}

export default Signup;

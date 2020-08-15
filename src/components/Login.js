import React, { useState, Fragment } from 'react';
import { Button  } from 'react-bootstrap';
import { loginUser } from '../utils/userService';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [issubmit, setSubmit] = useState(false)
    const [loginFailed, setloginFailed] = useState(false)
     const history = useHistory()
    const handleSubmit=(event)=>{
        const form = event.target
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
          }else{
          form.classList.remove("was-validated");
          event.preventDefault();
          setSubmit(true)
          loginUser(email,password).then((data)=>{
              setSubmit(false)
              if (!data.error){
                  setloginFailed(false)
              localStorage.setItem("token",data.token)
              console.log(data)
              history.push('/main')
              }else{
                setloginFailed(true)
              }

          }).catch((error)=>{
          })

          }

    }
    return (
        <Fragment>
           {loginFailed && <div className="alert alert-danger" style={{fontSize:'14px', fontWeight:"bold"}} role="alert">
             Invalid Email or Password
</div>}
             <form id="login-form" className="needs-validation" onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <input type="text" name="email" id="email" tabIndex="1" className="form-control" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required />
                    <div className='invalid-feedback' style={{fontSize:'12px'}}>{email.length===0 ? "Email is Required" : "Invalid Email"}</div>
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" id="password" tabIndex="2" className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}  minLength='8' required/>
                    <div className='invalid-feedback' style={{fontSize:'12px'}}>Password minium 8 character</div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6 col-sm-offset-3 my-5">
                          <Button  type='submit' disabled={issubmit} style={{fontSize:'20px' }} variant='success'size='lg' block> {issubmit? "Login...":"Login"}</Button>
                      </div>
                    </div>
                  </div>
                </form>
                </Fragment>
    )
}

export default Login;

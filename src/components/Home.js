import React, { useState} from 'react'
import Login from './Login'
import '../Home.css'
import Signup from './signup'

const Home =()=>{
    const [viewLogin, setViewLogin] = useState(true)

    return(
        <div className='login-container'>
        <div className="container">
    	<div className="row">
			<div className="col-md-5 col-md-offset-3">
				<div className="panel panel-login">
					<div className="panel-heading">
						<div className="row">
							<div className="col-xs-6">
								<a href='#log' className={viewLogin ? 'active':''} onClick={()=>setViewLogin(true)} id="login-form-link">Login</a>
							</div>
							<div className="col-xs-6">
								<a href='#reg' id="register-form-link" className={viewLogin ? '': 'active'} onClick={()=>setViewLogin(false)}>Register</a>
							</div>
						</div>
						<hr/>
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
                                {viewLogin ? <Login/>:<Signup/>}
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
    )
}

export default Home
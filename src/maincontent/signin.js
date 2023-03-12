import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './sign.css'

class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: "",
      password: "",
      confirmpassword: "",
      erroremail: "",
      errorpassword: "",
      errorconfirmpassword: ""
    }
  }
  emailHandler =(event)=>{
      this.setState({ 
          email: event.target.value
  })
      let value= event.target.value;
      const mail= /^([a-z\d]+)@([a-z]+)\.([a-z]{2,7})$/;
      let result= mail.test(value)
      if(result === true){
          this.setState({ 
              erroremail:""
      })
      }
      else{
              this.setState({ 
                  erroremail: "Invalid Email!"
          })

      }
          
      }
  passwordHandler= (event)=>{
      this.setState({
          password: event.target.value
      })
      let value= event.target.value;
      const pass= /^([\w\d]{6,12})$/;
      let result= pass.test(value)
      if(result === true){
          this.setState({ 
              errorpassword:""
      })
      }
      else if(value.length > 12){
          this.setState({ 
              errorpassword:"Password should be less than 12 character"
      })
      }
      else if(value.length < 6){
          this.setState({ 
              errorpassword:"Password should be greater than 6 character"
      })
      }         
  }
  confirmpasswordHandler= (event)=>{
    this.setState({
      confirmpassword: event.target.value 
  })
  console.log(this.state.confirmpassword)

  }
  formHandler =(event)=>{
      event.preventDefault()
      if(this.state.password !== this.state.confirmpassword){
        this.setState({
          errorconfirmpassword: "Both password should be same"
        })
      }
      if(this.state.password === this.state.confirmpassword){
        this.setState({
          errorconfirmpassword: ""
        }) 
      }
      if(this.state.email===""){
        this.setState({ 
            erroremail: "Email required*"
    })
    }
    if(this.state.password===""){
        this.setState({ 
            errorpassword: "Password required*"
    })
    }
  }
 
render() {
  return (
   
    <div className='container'>
      <h1>Sign Up</h1>
      <form action="" onSubmit={this.formHandler} >
          <label htmlFor="Email" className='label'>Email: </label> <br />
      <input type="text" className={`Email`} value={this.state.email} onChange={this.emailHandler} placeholder="EnterValid@gmail.com"/> <br />
          <p className='errorText'>{this.state.erroremail}</p>
          <label htmlFor="Password">Password: </label> <br />
          <input type="password" className={`Password`}   value={this.state.password} onChange={this.passwordHandler}/> <br />
          <p className='errorText'>{this.state.errorpassword}</p>
          <label htmlFor="Password">Confirm password: </label> <br />
          <input type="password" className={`Password`} value={this.state.confirmpassword} onChange={this.confirmpasswordHandler}/> <br />
          <p className='errorText'>{this.state.errorconfirmpassword}</p>
          <button type="submit" className='But-n'>SUBMIT</button> 
      </form>
      <p>Already have an account? <br /> <Link to="/Login" className='Link'>Login</Link> </p>
      
    </div>
  )
}
}

export default Signup;
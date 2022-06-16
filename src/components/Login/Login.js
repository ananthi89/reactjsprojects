import './Login.css';
import {Link,useNavigate} from 'react-router-dom'; 
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validation';
import books from '../../assests/books.jpg';
import bookstack from '../../assests/bookstack.jpeg';


function Login(){
  const navigate = useNavigate();

  const[getForm,setForm]=useState({
    email:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault(); 
    setValidation({
      ...getValidation,email:!emailValidation(getForm.email)?"please provide registered email":'',
      password:!passwordValidation(getForm.password)?"Please provide correct password":''
    });
    if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
      alert("success");
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email === getForm.email && password === getForm.password){
        navigate('/about');
      }
      else{
        setValidation({
          email:'no match found',
          password:'no match found'
        });
      }
  
    }
}
return (<div>
<div className="container bgimg">   
  <div className="row">
    <div className="col-4">
    </div> 
      <div className="col-4 loginform">             
          <div className="row">
            <div className="col-4">
              <div> <img src={bookstack} width={100} height={100}/> </div> 
            </div>                    
            <div className="col-4">
               <h1>LIBRARY</h1>
               <h6>MANAGEMENT SYSTEM</h6>
            </div>    
          </div>
          <form className="form-inline">        
            <div className="form-group row">
              <label style={{width:"150px"}} >UserName</label>
                <div className="input-group">
                <div className="input-group-prepend">
                   <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>
                <input type="email" onChange={onChangeHandler} value={getForm.email} className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" style={{width:"170px"}}  placeholder="Enter email"/>
                        {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
                        </div> }
                
                </div>    
            </div>
                        
            <div className="form-group row" style={{marginTop:"20px"}}>
                     <label style={{width:"150px"}}>Password</label>
                    <div className="input-group">
                    <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-key" aria-hidden="true"></i></span>
                    </div>    
                    <input type="password" onChange={onChangeHandler} value={getForm.password} name="password" className="form-control" id="password" placeholder="Password" style={{width:"170px"}}/>
                       
                        {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
</div>}                      
                        </div>              
                    
              </div>    
                <div className="form-group row">
                    <div className="col-sm-10" style={{paddingLeft:"150", marginTop:"50"}}>
                        
                    <button type="submit" onClick={onSubmitHandler} className="btn btn-warning logbutton1">Login</button>
      
                    </div>
                </div>
            </form>
              
                <div className="col-4">                    
                </div>
            </div>    
        </div>
    </div>
        
</div>)
}
 
export default Login;
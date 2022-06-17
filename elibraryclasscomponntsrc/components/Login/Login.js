import './Login.css';
import {emailValidation,passwordValidation}  from '../Validation';
import books from '../../assests/books.jpg';
import bookstack from '../../assests/bookstack.jpeg';
import {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      getForm:{
        email:'',
        password:''
      },
      getValidation:{
        email:'',
        password:''
      }
    }
  }
  
  onChangeHandler=(event)=>{
    this.setState({
      getForm:{
        ...this.state.getForm,
        [event.target.name]:event.target.value
       }
      })
       }
       onSubmitHandler=(event)=>{
            event.preventDefault(); 
            this.setState({
              getValidation:{
              email:!emailValidation(this.state.getForm.email)?"please provide registered email":'',
              password:!passwordValidation(this.state.getForm.password)?"Please provide correct password":''
              }
            });
            if(emailValidation(this.state.getForm.email) && passwordValidation(this.state.getForm.password)){
              alert("success");
              let email = sessionStorage.getItem('email');
              let password = sessionStorage.getItem('password');
              if(email === this.state.getForm.email && password === this.state.getForm.password){
                document.location.href="/about";
              }
              else{
                this.setState({
                  getValidation:{
                  email:'no match found',
                  password:'no match found'
                  }                  
                });
              }          
            }
        }     
      
        
  render(){
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
                       <input type="email" onChange={this.onChangeHandler} className="form-control" id="email" name="email" aria-describedby="inputGroupPrepend" style={{width:"170px"}}  placeholder="Enter email"/>
                               {this.state.getValidation.email && <div class="alert alert-danger" role="alert">
                               {this.state.getValidation.email}
                               </div> }
                      
                       </div>    
                   </div>
                              
                   <div className="form-group row" style={{marginTop:"20px"}}>
                            <label style={{width:"150px"}}>Password</label>
                           <div className="input-group">
                           <div className="input-group-prepend">
                                   <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-key" aria-hidden="true"></i></span>
                         </div>    
                           <input type="password" onChange={this.onChangeHandler} name="password" className="form-control" id="password" placeholder="Password" style={{width:"170px"}}/>
                             
                               {this.state.getValidation.password && <div class="alert alert-danger" role="alert">
                               {this.state.getValidation.password}
       </div>}                      
                             </div>              
                          
                     </div>    
                       <div className="form-group row">
                           <div className="col-sm-10" style={{paddingLeft:"150", marginTop:"50"}}>
                              
                           <button type="submit" onClick={this.onSubmitHandler} className="btn btn-warning logbutton1">Login</button>
            
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

}



// function Login(){
//   const navigate = useNavigate();



//   const onSubmitHandler=(event)=>{
//     event.preventDefault(); 
//     setValidation({
//       ...getValidation,email:!emailValidation(getForm.email)?"please provide registered email":'',
//       password:!passwordValidation(getForm.password)?"Please provide correct password":''
//     });
//     if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
//       alert("success");
//       let email = sessionStorage.getItem('email');
//       let password = sessionStorage.getItem('password');
//       if(email === getForm.email && password === getForm.password){
//         navigate('/about');
//       }
//       else{
//         setValidation({
//           email:'no match found',
//           password:'no match found'
//         });
//       }
  
//     }
// }
// 
// }
 
export default Login;
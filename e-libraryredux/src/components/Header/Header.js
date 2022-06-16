import './Header.css';
import {Link,useNavigate} from 'react-router-dom';
import image from '../../assests/image.jpeg';
import {useSelector} from 'react-redux';
import {useDispatch } from 'react-redux';
import Users from '../../services/users';
 
function Header(){
  const usersInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout=(event)=>{
    event.preventDefault();
    Users.logout(dispatch);
    navigate('/');
  }
    return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> 
    <div> <img src={image} width={80} height={60}/> </div>        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active" >
        <Link className="nav-link" to="/about">About</Link>  
          {/* <a className="nav-link" href="#">About Library</a> */}
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#">Rules and Regulations</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Price Card</a>
          </li>
      </ul>
      {!usersInfo.loginStatus &&
              <form className="form-inline my-2 my-lg-0">
              <button className="btn btn-outline-success my-2 my-sm-0 submit-register" type="submit"><Link to="/">Sign Up</Link></button>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/Login">Login</Link></button>
            </form>
               }

      {usersInfo.loginStatus &&
      <form className="form-inline my-2 my-lg-0">
        
        <button className="btn btn-warning my-2 my-sm-0 logbutton" onClick={onLogout} type="submit">Logout</button>
      </form>
}
      
    </div>
  </nav>
    
  </div>)
}
 
export default Header;
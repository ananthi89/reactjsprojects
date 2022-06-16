import './Header.css';
import {Link} from 'react-router-dom';
import image from '../../assests/image.jpeg';
 
function Header(){
    return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark "> 
    <div> <img src={image} width={80} height={60}/> </div>        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active" >
          <a className="nav-link" href="#">About Library</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="#">Rules and Regulations</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Price Card</a>
          </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        
        <button className="btn btn-warning my-2 my-sm-0 logbutton" type="submit"><Link to="/Login">Login</Link></button>
      </form>
      
    </div>
  </nav>
    
  </div>)
}
 
export default Header;
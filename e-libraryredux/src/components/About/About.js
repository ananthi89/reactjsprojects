import './About.css';
import {Link} from 'react-router-dom'; 
import books from '../../assests/books.jpg';
function About(){
    return (<div>
        <div className="container ">
            <div className="row img-about">
                             
                <div className="col about-weltext" > 
                <div><h1>Library Management System</h1></div>
              </div>              
            </div>  
            </div>
            <div className="container"></div>
            <div className="row">
            <div className="col about-par" >
                  
                  <div><h4>Online library management project in spring spring and hibernate is 
                      complete solution for all the manual problem that we face during the library
                      management. Mainly there are 2 main actor of the application that going to operate
                      the application <b>1 Admin/ Librarian and 2 User/Students.</b><br/>
                      Book or Digital books is the main module of the library management
                      system. Book are assets that we are storing in the database with some 
                      details like name, author name and version and a PDF format. So admin 
                      can perform crud operation and issued the booked to users</h4></div>
  
                </div>              
              </div> 
              <button className="btn btn-warning logbutton" type="submit"><Link to="/Adminsearch">SearchBook</Link></button><br/>
              <button className="btn btn-warning logbutton" type="submit"><Link to="/Addbook">AddBook</Link></button>
        </div>
        


   )
}
 
export default About;

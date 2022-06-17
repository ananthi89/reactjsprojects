import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Searchbooknw from './components/Searchbooknw/Searchbooknw';
import Addbooknw from './components/Addbooknw/Addbooknw';
import Adminsearchnw from './components/Adminsearchnw/Adminsearchnw';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Component} from 'react';

class App extends Component{
render(){
  return (<div> 
       <BrowserRouter>        
       <Routes>      
       <Route path='' element={<><Header/><Register/></>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/about' element={<><Header/><About/></>} />
       <Route path='/searchbooknw' element={<><Header/><Searchbooknw/></>} />
       <Route path='/addbooknw' element={<><Header/><Addbooknw/></>} /> 
       <Route path='/adminsearchnw' element={<><Header/><Adminsearchnw/></>} />   
       </Routes>   
       </BrowserRouter>           
        </div>
     )
}
}

// function App() {
//  
// }

export default App;

import './App.css';
import './assests/font-awesome/css/font-awesome.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Searchbook from './components/Searchbook/Searchbook';
import Addbook from './components/Addbook/Addbook';
import Adminsearch from './components/Adminsearch/Adminsearch';



import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (<div> 
    <BrowserRouter>        
    <Routes>      
    <Route path='' element={<><Header/><Register/></>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/about' element={<><Header/><About/></>} />
    <Route path='/searchbook' element={<><Header/><Searchbook/></>} />
    <Route path='/addbook' element={<><Header/><Addbook/></>} /> 
    <Route path='/adminsearch' element={<><Header/><Adminsearch/></>} />  

    </Routes>   
    </BrowserRouter>
       
    </div>
  )
}

export default App;

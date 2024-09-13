import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/Notes/Notestate';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';
import GetStarted from './components/GetStarted';
import Loginsignup from './components/Loginsignup';

function App() {
  const [alert,setAlert]=useState(null);  
  const [showWel , setShowWel] = useState(true);  
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [showLogSign, setShowLogSign] = useState(false); 
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setShowWel(false)
    }
  }, []);

  return (
    <>
    <NoteState>
    <Router>
    {isAuthenticated &&<Navbar setIsAuthenticated={setIsAuthenticated}/>}
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        {showWel && (
          <Route exact path='/' element={<GetStarted setWelScr={setShowWel}  setShowLogSign={setShowLogSign}/>}/>
        )} 
         {showLogSign && !isAuthenticated && (
                <Route exact path='/' element={<Loginsignup />} />
              )}
          <>
           {!isAuthenticated && (
                <>
                  <Route exact path='/login' element={<Login showAlert={showAlert} setIsAuthenticated={setIsAuthenticated} />} />
                  <Route exact path='/signup' element={<Signup showAlert={showAlert} setIsAuthenticated={setIsAuthenticated} />} />
                </>
              )}
          
        <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About/>}/>
      </>
      </Routes>
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

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

function App() {
  const [alert,setAlert]=useState(null);  
  const [showWel , setShowWel] = useState(true);  
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  useEffect(()=>{
    if(localStorage.getItem('tokn')){
      setIsAuthenticated(true)
    }
  },[])

  return (
    <>
    <NoteState>
    <Router>
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        {showWel ? (
          <Route exact path='/' element={<GetStarted setWelScr={setShowWel}/>}/>
        ):(
          <>
          
          <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
          {isAuthenticated && <Navbar/>}
        <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
      </>
      )}
      </Routes>
      </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;

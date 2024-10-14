
import './App.css';
import Uppercase from "./my compo/Uppercase.js"
import Navbar from "./my compo/navbar"
import Table from "./my compo/table"
import About from './my compo/About';
import { useState } from 'react'

function App() {

  const [mode,setmode] = useState('light')
  
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='black'
    }
    else{
  setmode('light')
  document.body.style.backgroundColor='white'
    }
  }
  
 return(
  <>
  <Navbar   mode={mode} toggleMode={toggleMode} tittle='Myutils' homesec='Home' />
  {/* <About/> */}
  {/* <Table/> */}
  <Uppercase mode={mode} />
  {/* <Navbar tittle="My Store" homesec="Home" vegetables="Vegetables" /> */}
{/* <Table name="Name" email="Email" number="Number"  /> */}
</>
 );
}

export default App;

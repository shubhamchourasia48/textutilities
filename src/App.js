import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Error from './components/Error';
import {

  Switch,
  Route,

} from "react-router-dom";



function App() {

  //state for setting darkmode using switch button 
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#05163a";
      showAlert("success", "Dark mode has been enabled")
      document.title = "TextUtlis-DarkMode"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled")
      document.title = "TextUtlis-Home"

    }
  }

  //state to set alerts
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      alertType: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    },
      3000)
  }

  return (

    <>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggle={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/">
            <Textform heading="Text-Utils" mode={mode} showAlert={showAlert} />
          </Route>

          <Route>
            <Error mode={mode}/>
          </Route>

        </Switch>
      </div>
    </>
  )
}

export default App;


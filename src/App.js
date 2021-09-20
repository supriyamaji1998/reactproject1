import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import AlertsAPI from "./components/AlertAPI";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const tooglemode = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("DarkMode activated sucessfully", "success");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      showAlert("LightMode activated sucessfully", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="App">
      <Navbar
        title="TextUtils"
        navlist1="Home"
        navlist2="About Us"
        mode={mode}
        tooglemode={tooglemode}
      />
      <AlertsAPI alert={alert} />
      <Container>
//         <Router>
//           <Switch>
//             <Route exact path="/about">
              <About />
//             </Route>
//             <Route exact path="/">
              <TextForm
                heading="Enter the text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
//             </Route>
//           </Switch>
//         </Router>
      </Container>
    </div>
  );
}

export default App;

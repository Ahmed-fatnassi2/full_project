// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Menu2 from "./p1/Menu2";
import Categories from "./p1/Categories";
import items from "./p1/data";
// import { navbar } from "./navbar";
import logo from "./p1/logo.JPG";
// import { Login } from "./component/Login";
import ReactDOM from "react-dom";



// import "./App.css";
import HamburgerMenu from "./p2/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import Home from "./p2/Pages/Home";
import About from "./p2/Pages/About";
import Portfolio from "./p2/Pages/Portfolio";
import Blog from "./p2/Pages/Blog";
import Contact from "./p2/Pages/Contact";



// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import Home3 from "./p3/Home3";
import About3 from "./p3/About3";
// import Online from "./components/Online";
// import Offline from "./components/Offline";
import Contact3 from "./p3/Contact3";
import Iogin from './p3/menu/Iogin'
import Navbarmenu from "./p3/menu/Navbarmenu";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {

  const [exemple1, setexemple1] = useState(false);
  const [menu4, setmenu4] = useState(false);
  const [login1, setlogin1] = useState(true);
  const [login2, setlogin2] = useState(false);
   
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);



  


  // const resetFileds = () => {
  //     // document.getElementById("e1").value = "";
  //     alert("Commande Envoyé");
  // };
  const filterItems = (category) => {
      setActiveCategory(category);
      if (category === "all") {
          setMenuItems(items);
          return;
      }
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
  };




  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

///////////////////////
  // const [errorMessages2, setErrorMessages2] = useState({});
  // const [isSubmitted2, setIsSubmitted2] = useState(false);

  // // User Login info
  // const database2 = [
  //   {
  //     username: "user3",
  //     password: "pass3"
  //   },
  //   {
  //     username: "user4",
  //     password: "pass4"
  //   }
  // ];

  // const errors2 = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  // const handleSubmit2 = (event) => {
  //   //Prevent page reload
  //   event.preventDefault();

  //   var { uname, pass } = document.forms[0];

  //   // Find user login info
  //   const userData2 = database2.find((user) => user.username === uname.value);

  //   // Compare user info
  //   if (userData2) {
  //     if (userData2.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages2({ name: "pass", message: errors.pass });
  //     } else {
  //       setIsSubmitted2(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages2({ name: "uname", message: errors.uname });
  //   }
  // };

  // // Generate JSX code for error message
  // const renderErrorMessage2 = (name) =>
  //   name === errorMessages2.name && (
  //     <div className="error">{errorMessages2.message}</div>
  //   );

  // // JSX code for login form
  // const renderForm2 = (
  //   <div className="form">
  //     <form onSubmit={handleSubmit2}>
  //       <div className="input-container">
  //         <label>Username </label>
  //         <input type="text" name="uname" required />
  //         {renderErrorMessage2("uname")}
  //       </div>
  //       <div className="input-container">
  //         <label>Password </label>
  //         <input type="password" name="pass" required />
  //         {renderErrorMessage2("pass")}
  //       </div>
  //       <div className="button-container">
  //         <input type="submit" />
  //       </div>
  //     </form>
  //   </div>
  // );


  //exemple1//
if(exemple1==true){


  return (
    

<main>
          <section className="menu section">
           
              <div className="title">
                  <img src={logo} alt="logo" className="logo" />
                  <h2>Menu List</h2>
                  <div className="underline"></div>
              </div>
              <Categories
                  categories={categories}
                  activeCategory={activeCategory}
                  filterItems={filterItems}
              />
              <Menu2 items={menuItems} />
             
          </section>
      </main>
  );}
//exemple1//

  // return (
  //   <div className="App">
     
  //   </div>
  // );

//menu3//
  if(((exemple1==false)&&(login1==false))&&((menu4==false)&&(login2==false))){
    return(

      <Router>
      <HamburgerMenu />

      <div className="pages">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch></BrowserRouter>
      </div>
    </Router>

    )
  }
  //menu3//




  //menu4//
if(menu4==true){
  return(
    <Router basename="/">
    {/* Add Menu Component */}
    <Navbarmenu />

    <Switch>
        <Route exact path="/" component={Home3} />
        <Route path="/About3" component={About3} />
        {/* <Route path="/Online" component={Online} />
        <Route path="/Offline" component={Offline} /> */}
        <Route path="/Contact3" component={Contact3} />
    </Switch>
</Router>

  )
}
  //menu4//

  //login1//
if(login1==true){
  return(
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  )
}
  //login1//

//login2//
if(login2==true){
  return(
    // <div className="app">
    //   <div className="login-form">
    //     <div className="title">Sign In</div>
    //     {isSubmitted2 ? <div>User is successfully logged in</div> : renderForm}
    //   </div>
    // </div>
    <Iogin/>
  )
}
//login2//

}

export default App;

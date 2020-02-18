import React from 'react';

import Navbar from './layouts/Navbar';


import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App" id="app">
    <header>
       <nav id="mainnavbar" style={{opacity: "0.75"}} className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
         <a className="navbar-brand" id="navtitle">Portfolio</a>
         <button
           className="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarNav"
           >
           <span className="navbar-toggler-icon">
           </span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNav">
           <ul id="main" className="navbar-nav">
              <li className="nav-item active">
               <a href="#landing" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#aboutme" className="nav-link">About Me</a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">Projects</a>
              </li>
               <li className="nav-item ">
                <a href="#contactme" className="nav-link">Contact Me</a>
              </li>
           </ul>
         </div>
       </nav>
    </header>

     <main id="pages">
       
       <section id="landing" className="d-flex align-items-center pb-5 mt-5">
           <div id="space" className="container">
             <div className="row">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">

                <div id="mainpage" className="jumbotron">
                  
                  <h1 className="display-4">Welcome to My Online Portfolio!</h1>
                  <p></p>
                  <hr className="my-4"/>
                  <p>This is Michelle Lauren Espino, a full-stack developer.</p>
                  <p className="text-center">
                    <a style={{color: "#fadadd"}} id="button1" className="btn btn-lg" href="#aboutme" > &#x21CA; Click here to see me! &#x21CA;</a>
                  </p>
                </div>
                   
              </div>
              <div class="col-lg-6 pt-5 pt-lg-0 mt-5 mx-auto">
              </div>
            </div>
           </div>
           <hr/>
       </section>

       <section id="aboutme" className="d-flex align-items-center pb-5">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <h1 className="text-center mt-3">About Me</h1>  
               <hr/>
             </div>
             <div  className="col-lg-6 justify-content-center mx-auto">
              <div className="row">
              </div>
               <div class="card" style={{width: "24rem;"}}>
                 <img src="https://scontent.fmnl14-1.fna.fbcdn.net/v/t1.0-9/81455957_3291203810895980_6666070301756882944_n.jpg?_nc_cat=106&_nc_ohc=T-NVQYt9tf8AX9Il2KA&_nc_ht=scontent.fmnl14-1.fna&oh=6e25574800c91a1fe9edea6cfce77d9d&oe=5EB74817" className="card-img-bottom" alt="me"/>
               </div>
             </div>
             <div id="main" className="col-lg-6 justify-content-center mx-auto">
               <p className="text-justify mt-5">
                 Michelle Lauren Espino is a BS Information Technology Graduate from Adamson Univesity, currently taking a training in Zuitt Coding Bootcamp. She would like to develop Web Development Applications in the future.
               </p>
               <p className="text-justify">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, corrupti cupiditate aliquid. Quae maiores, quis, delectus necessitatibus aperiam, temporibus accusantium fuga harum ex voluptate saepe nulla aut voluptatem assumenda.
               </p>
                <p className="text-justify">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, corrupti cupiditate aliquid. Quae maiores, quis, delectus necessitatibus aperiam, temporibus accusantium fuga harum ex voluptate saepe nulla aut voluptatem assumenda.
               </p>
               <hr/>
               <h3>Skills:</h3>
               <p className="text-center">
                 <img src="https://img.icons8.com/color/72/000000/html-5.png"/>
                 <img src="https://img.icons8.com/color/72/000000/css3.png"/>
                 <img src="https://img.icons8.com/color/72/000000/javascript.png"/>
                 <img src="https://img.icons8.com/color/72/000000/bootstrap.png"/>
                 <img src="https://img.icons8.com/color/72/000000/php.png"/>
                 <img src="https://img.icons8.com/windows/72/000000/laravel.png"/>
                 <img src="https://img.icons8.com/color/72/000000/mysql.png"/>
                 <img src="https://img.icons8.com/color/72/000000/react-native.png"/>
               </p>
             </div>
           </div>
         </div>
       </section>

       <section id="projects" className="d-flex align-items-center pb-5">
         <div className="container">
           <div className="row">
            <div className="col-12">
                <h1 className=" text-center mt-3">My Projects</h1>
                <hr/>
            </div>
             <div className="col-sm-4 mx-auto">
               <div className="card border-info mb-3" style={{width: "18rem;"}}>
                <div id="capstitle" className="card-header bg-transparent border-info text-center">Capstone 1: FoodStrEATs</div>
                 <img className="card-img-top" src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="capstone1"/>
                 <div className="card-body">
                   <p className="card-text"></p>
                   <a href="https://iammichieespino.gitlab.io/capstoneone/" className="btn btn-outline-info" role="button">View Project</a>
                 </div>
               </div>
             </div>
             <div className="col-sm-4 mx-auto">
               <div className="card border-info mb-3" style={{width: "18rem;"}}>
                <div id="capstitle" className="card-header bg-transparent border-info text-center">Capstone 2: Girlish Styles</div>
                 <img className="card-img-top" src="https://images.pexels.com/photos/1054289/pexels-photo-1054289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="capstone2"/>
                 <div className="card-body">
                   <p className="card-text"></p>
                   <a href="https://costumerentals-main.herokuapp.com/" className="btn btn-outline-info" role="button">View Project</a>
                 </div>
               </div>
             </div>
             <div className="col-sm-4 mx-auto">
               <div className="card border-info mb-3" style={{width: "18rem;"}}>
                <div id="capstitle" className="card-header bg-transparent border-info text-center">Capstone 3: FinderSpace</div>
                 <img className="card-img-top" src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="capstone3"/>
                 <div className="card-body">
                   <p className="card-text"></p>
                   <a href="https://capstone3-bookingclient.herokuapp.com/" className="btn btn-outline-info" role="button">View Project</a>
                 </div>
               </div>

             </div>
           </div>
         </div>
       </section>

       <section id="contactme" className="d-flex align-items-center pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className=" text-center mt-3">Contact Me!</h1>
                <hr/>
            </div>
            <div className="col-lg-6 mx-auto" id="main">
              <h3>Details</h3>
              <p className="text-justify">
                <img src="https://img.icons8.com/cotton/36/000000/new-message.png"/>
                Email: michellelaurenespino@gmail.com
              </p>
              <p className="text-justify">
                <img src="https://img.icons8.com/plasticine/36/000000/cell-phone.png"/>
                Mobile: 0999-1234567
              </p>
            </div>
             <div className="col-lg-6 mx-auto">
               <p className="text-justify mt-5">
                 Michelle Lauren Espino is a BS Information Technology Graduate from Adamson Univesity, currently taking a training in Zuitt Coding Bootcamp. She would like to develop Web Development Applications in the future.
               </p>
               <p className="text-justify mt-5">
                 Michelle Lauren Espino is a BS Information Technology Graduate from Adamson Univesity, currently taking a training in Zuitt Coding Bootcamp. She would like to develop Web Development Applications in the future.
               </p>
               
             </div>
             </div>
          </div>
       </section>
     </main>

     <footer className="page-footer font-small bg-transparent pt-4">

       
       <div className="container-fluid text-center text-md-left">

        
         <div className="row">

           
           <div className="col-md-6 mt-md-0 mt-3">

         
             <h5 className="text-uppercase">Online Portfolio</h5>
             <p>The images and graphics used in this page, was not all mine.
             It's just for the Online Portfolio Presentation</p>

           </div>
         

           <hr className="clearfix w-100 d-md-none pb-3"/>

    
           <div className="col-md-3 mb-md-0 mb-3">

             <h5 className="text-uppercase">Social Medias:</h5>

             <p className="text-center">
              <a href="https://www.facebook.com/michelle.espino24">
               <img src="https://img.icons8.com/color/64/000000/facebook.png"/>
               </a>
              <a href="https://twitter.com/iammichieespino">
               <img src="https://img.icons8.com/color/64/000000/twitter-squared.png"/>
               </a>
              <a href="https://www.instagram.com/iammichieespino/">
               <img src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"/>
               </a>
              <a href="https://www.linkedin.com/in/michelle-lauren-espino-284384179/">
               <img src="https://img.icons8.com/color/64/000000/linkedin.png"/>
              </a>
             </p>
            
           </div>

         </div>
    

       </div>

       <div className="footer-copyright text-center py-3">© 2020 Copyright:
         <p> Michelle Lauren Espino | Online Portfolio</p>
       </div>

     </footer>
  

     
     
      </div>
    </Router>

  );
}

export default App;

import React from 'react'


const AboutMe = () => {
   return(
       <div className="container">
         <div className="row">
           <div className="col-12">
             <h1 className="text-center">About Me</h1>  
             <hr/>
           </div>
           <div className="col-sm-6 mx-auto">
             <img src="./../pastel.png" className="img-responsive"/>
           </div>
           <div className="col-sm-6 mx-auto">
             <p className="text-justify mt-5">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, corrupti cupiditate aliquid. Quae maiores, quis, delectus necessitatibus aperiam, temporibus accusantium fuga harum ex voluptate saepe nulla aut voluptatem assumenda.
             </p>
             <p className="text-justify">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, corrupti cupiditate aliquid. Quae maiores, quis, delectus necessitatibus aperiam, temporibus accusantium fuga harum ex voluptate saepe nulla aut voluptatem assumenda.
             </p>
              <p className="text-justify">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores minus, corrupti cupiditate aliquid. Quae maiores, quis, delectus necessitatibus aperiam, temporibus accusantium fuga harum ex voluptate saepe nulla aut voluptatem assumenda.
             </p>
           </div>
           <div className="row">
             <div className="col-sm-6 mx-auto">
              
             </div>
             <div className="col-sm-6 mx-auto">
               <p>Skills</p>
               <ol>
                 <li>1.</li>
                 <li>1.</li>
               </ol>
             </div>
           </div>
         </div>
       </div>
   	)
}


export default AboutMe
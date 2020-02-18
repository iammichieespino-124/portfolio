import React from 'react'


const LandingPage = () =>{
	return(
	<React.Fragment>
       <div id="landing" className="container text-right">
         <div class="row">
           <div class="col-sm-6 mx-auto">
                
           </div>
           <div class="col-sm-6 mx-auto mt-5">
             <div className="jumbotron text-left">
               <h1 className="display-4">Hello, Welcome to My Site!</h1>
               <p></p>
               <hr className="my-4"/>
               <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
               <p>
                 <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
               </p>
             </div>
           </div>
         </div>
       </div>
    </React.Fragment>

	)
}

export default LandingPage


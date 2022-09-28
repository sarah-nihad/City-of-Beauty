import React,{Component} from 'react'

import Context from '../../assets/js/Context';

 class Videoo extends Component{


    
    constructor(props){
        super(props);
    this.state={
   
     
    }}

 

    render(){
        
        return(
     
          <Context.Consumer>{ctx => {
            return (
            <div className="video" >
    
       <div className="rd-video" >
         <video id='player' muted autoPlay loop  >
             <source src={require('../../assets/video.mp4')} type="video/mp4" />
         </video>
       </div>
      
       <div className="rd-overlay" ></div>
             
</div>



       

     
     

)
}}

</Context.Consumer>
        );
        
    }
}
export default Videoo;
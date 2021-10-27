import React,{Component} from "react";
import Lang from "../context/language";

class Button extends Component{
    static contextType = Lang;
    render(){
        const text = this.context ==="english" ? 'Submit':'enviar';
        return(
            
            <React.Fragment>
         
                    <div className="container"></div>
                    <button type="button" className="btn btn-danger btn-md">
                       {text}
                    </button>
                   
                
            </React.Fragment>
    
        
    )
}
    
};
export default Button;
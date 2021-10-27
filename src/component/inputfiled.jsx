import React,{Component} from "react";
import Lang from "../context/language";

class Inputfield extends Component{
    static contextType = Lang;
    render(){
        const text = this.context==="english" ? 'username':'nombre de usuario';
        return(
            <React.Fragment>
                <div className="container">
                  
                    <label htmlFor="username">{text}</label>
                    <input type="text" className="form-control" placeholder=
                    {this.context==='english'?'Enter Username':'Introduzca su nombre de usuario'
                    }/>
                    </div>
                
            </React.Fragment>
    
        )
    }
};
export default Inputfield;
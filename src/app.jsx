import React,{Component} from "react";
import Userfiled from "./component/users";
import Lang from "./context/language";

class App extends Component{
    constructor(){
        super();
        this.state={
            'lang':'english'
        }

    }
    changelanguage=(data)=>{
        this.setState({lang:data});
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="container">
                        <button type="button" className="btn btn-primary"
                        onClick={()=>this.changelanguage('english')}
                        >ENGLISH </button>
                        <button type="button" className="btn btn-danger"
                         onClick={()=>this.changelanguage('spanish')}
                         >SPANISH</button>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Lang.Provider value={this.state.lang}>
                            <Userfiled/>
                            </Lang.Provider>
                       
                        </div>
                        <div className="col-md-6">
                            Users
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
          
        
    }
       
    

};

export default App;
import React from 'react'
import './App.css'
import {Button} from 'react-bootstrap'
import Counter from './Counter/Counter'

class App extends React.Component{
    constructor(){
        super();
        this.state={
          show:false
        }
        // if method is not arrow function
        // this.handleShow=this.handleShow.bind(this)
    }
    handleShow=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return(
            <div className="App">
                <Button  variant="secondary" onClick={this.handleShow} >Show</Button>
               {
                   this.state.show &&  <Counter />
               }
            </div>
        )
    }
}

export default App

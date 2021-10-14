import React from 'react'
import {Button, FormControl } from 'react-bootstrap'
import './Counter.css'

class Counter extends React.Component {
    constructor(){
        super();
      this.state={
          count:0,
          text:""
      }
      console.log("constructor")
    }
   componentDidMount(){
       console.log("component Did Mount")
   }
   componentDidUpdate(){
       console.log("component did update")
   }


   componentWillUnmount(){
       console.log("will unmount")
   }

   // increment
     increment=()=>{
         this.setState({
             count:this.state.count+1
         })
     }

   // decrement
   decrement=()=>{
    this.setState({
        count:this.state.count>0 ? this.state.count-1:0
    })
}

    render(){
        console.log("render")
        return(
            <div className="container">
             <h2>This is Counter</h2>
             <div className="content">
             <Button variant="success"
             onClick={this.increment}
             >+</Button>
             <span>{this.state.count}</span>
             <Button variant="danger" 
             onClick={this.decrement}
             >-</Button>
            
             </div>
             <FormControl type="text" placeholder="enter your text ..."
             onChange={(e)=>this.setState({text:e.target.value})}
             />

              <p>{this.state.text}</p>
            </div>
        )
    }
}
export default Counter
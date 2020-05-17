
import React, { Component } from 'react';
import Viz from './Viz.js'
import BarChart from './bars.js'
import DrawGrapho from './drawGrapho.js'

export default class ControllerBar extends Component {

  render() {
    return(
      <div className="controller">
      <h2>Sample 01 plot Bars</h2>
        <div>
         <BarChart />
        </div>
      </div>

    )
  }
}



export  class ControllerGrapho extends Component {

  render() {
    return(
      <div className="controller">
        <h2>Sample 02  Grapho</h2>
        <div>
         <DrawGrapho />
        </div>
      </div>

    )
  }
}


export  class Controller extends Component {
  state = {
	  color: "",
	  width: "",
	  toDraw: [],
	}

  onSubmit = (evt) => {
  	evt.preventDefault();
  	const newShape = {
  	   color: this.state.color,
  	   width: this.state.width,
  	}
    this.setState({ toDraw: [...this.state.toDraw, newShape]})
  }

  onChange = (evt) => {
  	this.setState({[evt.target.name]: evt.target.value})
  }

  render() {
    return(
      <div className="controller">

        <DrawGrapho />
      </div>

    )
  }
}

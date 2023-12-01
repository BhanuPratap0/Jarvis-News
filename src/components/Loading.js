import React, { Component } from 'react'
import gif from './giphy.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center my-3'>
        <img style={{height:"220px",width:"220px"}} src={gif} alt="loading" />
      </div>
    )
  }
}

export default Loading

import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      region:'in'
    } 
  }
  state={
    progress:10
  }
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        
      <BrowserRouter>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
      />
      <NavBar/>
      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} key="general" headline="" pageSize={6} category=""/>} ></Route>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" headline="Entertainment" pageSize={6} category="entertainment"/>} ></Route>

        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" headline="Business" pageSize={6} category="business"/>} ></Route>

        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" headline="Health" pageSize={6} category="health"/>} ></Route>

        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" headline="Science" pageSize={6} category="science"/>} ></Route>

        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" headline="Sports" pageSize={6} category="sports"/>} ></Route>

        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" headline="Technology" pageSize={6} category="technology"/>} ></Route>

      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}


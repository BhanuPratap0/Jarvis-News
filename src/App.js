import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      region:'in'
    } 
  }
  render() {
    return (
      <div>
      <BrowserRouter>
      <NavBar toggleRegionIn={this.toggleRegionIn} toggleRegionUS={this.toggleRegionUS} />
      <Routes>
      <Route exact path="/" element={<News key="general" headline="" pageSize={6} category=""/>} ></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" headline="Entertainment" pageSize={6} category="entertainment"/>} ></Route>
        <Route exact path="/business" element={<News key="business" headline="Business" pageSize={6} category="business"/>} ></Route>
        <Route exact path="/health" element={<News key="health" headline="Health" pageSize={6} category="health"/>} ></Route>
        <Route exact path="/science" element={<News key="science" headline="Science" pageSize={6} category="science"/>} ></Route>
        <Route exact path="/sports" element={<News key="sports" headline="Sports" pageSize={6} category="sports"/>} ></Route>
        <Route exact path="/technology" element={<News key="technology" headline="Technology" pageSize={6} category="technology"/>} ></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}


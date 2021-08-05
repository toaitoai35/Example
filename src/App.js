
import React, { Component } from 'react';
import './App.css';
import SearchItem from './components/SeachItem';
import Table from './components/Table';
function App() {
  return (
    <div className="Header">
      <h1>Project 01 - To Do List<a> ReactJS</a></h1>
      <hr/>
      <SearchItem/>
      <Table/>
    </div>
    
  );
}
export default App;

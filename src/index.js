import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropDownSelect from './dropDown-component';  

let showCount = 5;
  
ReactDOM.render(<DropDownSelect  showCount={showCount} />, document.getElementById('root'));  

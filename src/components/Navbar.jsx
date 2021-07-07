import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
import Charts from './Charts'
import Example from './Dropdown'

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const [value, setValue] = useState("")
  console.log('this is array')
  console.log('this is coin data', props.coinData)

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const handleChange = (e) => {
		setValue(e.target.value);
  };
  console.log(value)

 const handleSubmit = (e) => {
    e.preventDefault();
   alert('Your crypto is ' + value)
}
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick a Crypto 
        <select value={value} onChange={handleChange}>
  {props.coinData.map(item =>{
  console.log('this is item', item.name)
  return <option value={`${item.name}`}>{item.name}</option>
  })}
        </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <Example /> */}
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

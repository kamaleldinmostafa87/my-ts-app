import React from 'react';
import './App.css';
import Auth from './Components/Auth';
import Person from './Components/Person';

function App() {
  const age = {
    agee: 24
  }

  const arr = [
    {
      teacher: 'mohamed',
      sub: 'math'
    },
    {
      teacher: 'kamal',                   
      sub: 'english'
    }
  ]

  // const info = {
  //   name: 'kamal',
  //   mail: 'kamal@gmail.com'
  // }
  return (
    <div className="App">
      <Person name="kamal" info={age} arr={arr}
      styles={{color: 'red', border:"1px solid red"}}
      />

      <Auth name={''} mail={''} />
    </div>
  );
}

export default App;

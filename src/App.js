import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App () {
  const[nayoks, setNayoks] = useState([])
  useEffect (() => {
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setNayoks(data))

  }, [])



  //  const nayoks = [{name:'Deepjol' ,age: 44},{name:'BappaRaz',age: 30},{name:'alomgir',age: 55},{name:'omor sani',age: 48}, {name:'razzak',age: 80}];
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
     {
      nayoks.map (nk => <Nayok name={nk.name} key={nk.id} age={nk.age}></Nayok>)
     }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );

    }
function MovieCounter () {
  const [count,setCount] = useState(0);

  const handleClick = () => setCount(count + 1);
  return (
    <div>
      <button onClick = {handleClick}>Add Movies</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay (props) {
  return <h3>I have moviedisplay acted: {props.movies}</h3>
}

function Nayok (props) {
  const nayokStyle = {
    border: '2px solid black',
    backgroundColor : 'crimson',
    color : 'white',
    margin : '10px'
  }
  return (
    <div style={nayokStyle}>
        <h1>I am React - {props.name}</h1>
        <h3>React Basic in {props.age || 30} years</h3>
      </div>
    )
}

export default App;

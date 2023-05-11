import './App.css';

function App() {

  const myFunction = () => {
    console.log("Hola a todos")
  };
  
  return (
    <div className="App">
      <button onClick={myFunction}>Hola Mundo</button>
    </div>
  );
}

export default App;

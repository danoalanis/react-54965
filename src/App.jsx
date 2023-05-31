import './App.css';
import ButtonComponent from './components/ButtonComponent';
function App() {

  const myFunction = () => {
    console.log("Hola a todos")
  };
  
  return (
    <div className="App">
      <ButtonComponent myFunction={myFunction} />
    </div>
  );
}

export default App;

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hola a todos, soy un componente react"/>
    </div>
  );
};

export default App;

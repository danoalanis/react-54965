import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi E-Commerce"/>
    </div>
  );
};

export default App;

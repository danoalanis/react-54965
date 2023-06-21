import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainRouter from "./routes/MainRouter";
import { CartProvider } from "./context/CartContext";
import Factorial from "./components/Factorial";

const App = () => {
  return (
    <CartProvider>
      <MainRouter />
      <Factorial number={3} />{" "}
    </CartProvider>
  );
};

export default App;

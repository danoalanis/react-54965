import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainRouter from "./routes/MainRouter";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  );
};

export default App;

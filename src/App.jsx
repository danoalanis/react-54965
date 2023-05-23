import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import UseEffectPractica from "./components/UseEffectPractica";
import MainLayout from "./layouts/MainLayout";
const App = () => {
  const handleCompraClick = () => {
    console.log("Comprado");
  };

  const handleCarritoClick = () => {
    console.log("Agregado al Carrito");
  };
  return (
    <MainLayout title="Home">
      <ButtonComponent
        label="Boton de compra"
        handleClick={handleCompraClick}
        customClass="boton-compra"
      />

      <ButtonComponent
        label="Boton de carrito"
        handleClick={handleCarritoClick}
        customClass="boton-carrito"
      />

      <ButtonComponent
        label="Boton de carrito"
        handleClick={handleCarritoClick}
        customClass="boton-eliminar"
      />

      <ButtonComponent
        handleClick={handleCarritoClick}
        customClass="boton-eliminar"
      />

      <UseEffectPractica />
      
    </MainLayout>
  );
};

export default App;

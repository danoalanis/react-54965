import "./App.css";

//Estilos tipo Css in JS
const condition = false;
const inLineStyle = {
  backgroundColor: condition ? "red" : "blue",
  color: "black",
};

function App() {
  const myFunction = () => {
    let result = null;
    if (!condition) {
      result = "true";
    } else {
      result = "false";
    }
    console.log(result);
  };

  return (
    <div className="App">
      <button
      /*Estilos en linea */
        style={{ backgroundColor: "green", color: "black", fontSize: "1rem" }}
        onClick={myFunction}
      >
        Hola Mundo
      </button>
      <div style={inLineStyle}>test</div>
      {/* Clases en CSS */}
      <div className="my-class">
        {condition ? (
          <strong>true</strong>
        ) : (
          <div style={{ color: "red" }}>false</div>
        )}
      </div>
    </div>
  );
}

export default App;

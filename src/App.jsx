import "./App.css";
// import { useState } from "react";
import Card from "./components/Card";
import Contador from "./components/Contador";
// PascalCase ---> AppComponent, CardComponent, ButtonComponent
// camelCase ---> className, backgroundColor, etc...
const App = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // const promesa = new Promise((resolve, reject) => {
  //   const flag = true;
  //   if (flag) {
  //     setTimeout(() => {
  //       resolve(setLoading(false));
  //     }, 3000);
  //   } else {
  //     reject("Operacion fallo");
  //   }
  // });

  //Pending...
  // console.log("Esperando a que se resuelva la promesa...");
  // console.log(promesa);

  // //Handle de la promesa (manipulacion)
  // promesa.then((res) => console.log(res)).catch((err) => console.log(err));

  return (
    <div className="App">
      {/* <Card title="Card principal" /> */}
      <Contador />
      {/* {loading ? <div>Loading...</div> : "Ya termine de cargar"} */}
    </div>
  );
};

export default App;

import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Exercicio1 from "./paginas/Exercicio1";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio3 from "./paginas/Exercicio3";


export default function App()
{
  return (
    <div>
      <h1>Aula 02 - Estudo de Componentes e Props</h1>

      <div className="card">
        <h3>Chamada para o Exemplo 1</h3>
        <Exemplo1 numero={33} />
        <Exemplo1 numero={43} />
        <Exemplo1 numero={2} />

      </div>
      <div className="card">
        <h3>Chamada para o Exemplo 2</h3>
        <Exemplo2 numero1={20} numero2={20} />
        <Exemplo2 numero1={20} numero2={200}/>
        <Exemplo2 numero1={2.6} numero2={2.7} />

      </div>
      <div className="card">
        <h3>Chamada para o Exercicio 1</h3>
        <Exercicio1 fanhe ={30}/>

      </div>
      <div className="card">
      <h3>Chamada para o exercicio 2</h3>
      <Exercicio2 altura={1.65} peso= {59}/>
      </div>

      <div className="card">
      <h3>Chamada para o exercicio 3</h3>
      <Exercicio3 nota1={5} nota2= {6}/>
      </div>

     

    </div>
  )
}
import "./App.css";
import Exemplo1 from "./paginas/Exemplo1";

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

    </div>
  )
}
export default function Exercicio2({peso, altura})
{
    let imc;
    imc = peso /(altura*altura);
    return (
        <div>
            o indice da massa corporal é {imc}
        </div>
    )
}
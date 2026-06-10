export default function Exercicio4()
{
    return (
        <div>

        </div>
    )
}



export default function Exercicio8( {dis, com} )
{ 

  let consu= Number(dis) / Number(com);

 
   

  if (consumo >= 12)
  {
    return (
        <div>
          ECONOMICO
        </div>
      )
  }
  else if (consumo >= 8)
  {
    return (
        <div>
          MODERADO
        </div>
      )
  }
  else
  {
    return (
        <div>
          GASTADOR
        </div>
      )
  }

  )
}

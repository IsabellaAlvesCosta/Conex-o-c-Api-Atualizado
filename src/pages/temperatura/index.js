import { useState } from 'react'
import axios from 'axios'

export default function Index() {
    const [temp, setTemp]=useState(0);
    const[resposta, setResposta]= useState('');

    async function verificartemp(){
        if(temp>=38){
            setResposta('Você está com febre')
        }

        else {
            setResposta('Temperatura normal')
        }

    }

    return (

          <main>

                  <h1> Programa da Temperatura </h1>
                  <div>

                        Informe sua temperatura: <input type='text' value ={temp} onChange={e => setTemp(e.target.value)} />
                </div>
                <div>

                                <button onClick={verificartemp}>Verificar</button>

                </div>
                <div>

                        Sua situação: {resposta}
                </div>
          </main>

  )

}